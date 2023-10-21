import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';

export async function PUT(req: NextRequest, { params }: { params: { productId: string } }) {
  try {
    if (!params.productId) {
      return NextResponse.json('Product id is required', { status: 400 });
    }

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

    const product = await prisma.product.update({
      where: {
        id: params.productId
      },
      data: {
        name,
        price,
        description,
        images: {
          deleteMany: {},
          createMany: {
            data: [...images.map((item: { url: string }) => item)]
          }
        }
      }
    });

    return NextResponse.json(product);
  } catch (error) {
    console.log('[PRODUCT_PATCH]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
