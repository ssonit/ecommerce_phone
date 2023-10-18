import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';

export async function POST(req: NextRequest) {
  try {
    const { userId } = auth();

    const body = await req.json();

    const { name, price, description, images } = body;

    if (!userId) {
      return NextResponse.json('Unauthorized', { status: 403 });
    }

    if (!name) {
      return NextResponse.json('Name is required', { status: 400 });
    }
    if (!price) {
      return NextResponse.json('Price is required', { status: 400 });
    }
    if (!images || !images.length) {
      return NextResponse.json('Images is required', { status: 400 });
    }

    // if (!colors || !colors.length) {
    //   return NextResponse.json('Colors is required', { status: 400 });
    // }

    const product = await prisma.product.create({
      data: {
        name,
        price,
        userId,
        description,
        images: {
          createMany: {
            data: [...images.map((item: { url: string }) => item)]
          }
        }
        // colors: {
        //   connect: [...colors.map((item: { id: string }) => item)]
        // },
      }
    });

    return NextResponse.json({
      data: product
    });
  } catch (error) {
    console.log('[PRODUCTS_POST]', error);
    return NextResponse.json('Internal error', { status: 500 });
  }
}
