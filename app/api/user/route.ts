import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';

export async function GET(req: NextRequest) {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json('Unauthorized', { status: 403 });
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userId
      }
    });

    return NextResponse.json({
      data: user
    });
  } catch (error) {
    console.log('[GET_ME]', error);
    return NextResponse.json('Internal error', { status: 500 });
  }
}
