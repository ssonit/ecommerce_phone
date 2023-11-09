import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prismadb';
import { WebhookEvent } from '@clerk/nextjs/server';
import { Webhook } from 'svix';

export async function POST(req: NextRequest) {
  const payload = await req.json();
  const body = JSON.stringify(payload);

  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    return NextResponse.json(
      {
        message: 'No WebHook Secret'
      },
      {
        status: 400
      }
    );
  }

  const headerPayload = headers();
  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return NextResponse.json(
      { message: 'Error occured -- no svix headers' },
      {
        status: 400
      }
    );
  }

  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature
    }) as WebhookEvent;
    console.log('Webhook');
  } catch (err) {
    return NextResponse.json(
      { message: 'Error occured' },
      {
        status: 400
      }
    );
  }

  const eventType = evt.type;

  if (eventType === 'user.created' || eventType === 'user.updated') {
    const { id, email_addresses, image_url, username } = evt.data;
    console.log({ message: 'Created successfully' });

    await prisma.user.upsert({
      where: {
        externalId: id
      },
      create: {
        id: id,
        externalId: id,
        email: email_addresses[0].email_address,
        username: username || '',
        password: id,
        avatar: image_url
      },
      update: {
        email: email_addresses[0].email_address,
        username: username || '',
        password: id,
        avatar: image_url
      }
    });
  }
  return NextResponse.json('', { status: 201 });
}
