import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';

export async function POST(req: NextRequest) {
  try {
    const { userId } = auth();

    const body = await req.json();

    const { productId, colorId, quantity } = body;

    if (!userId) {
      return NextResponse.json('Unauthorized', { status: 403 });
    }
    if (!colorId) {
      return NextResponse.json('ColorId is required', { status: 400 });
    }
    if (!productId) {
      return NextResponse.json('ProductId is required', { status: 400 });
    }
    if (!quantity) {
      return NextResponse.json('Quantity is required', { status: 400 });
    }

    const color = await prisma.color.findUnique({
      where: {
        id: colorId
      }
    });

    if (!color) {
      return NextResponse.json('Color not found', { status: 400 });
    }

    const product = await prisma.product.findUnique({
      where: {
        id: productId
      }
    });

    if (!product) {
      return NextResponse.json('Product not found', { status: 400 });
    }

    const existing = await prisma.cartItem.findFirst({
      where: {
        productId,
        userId
      }
    });

    let cart;

    if (existing) {
      cart = await prisma.cartItem.update({
        where: { id: existing.id },
        data: {
          quantity,
          colorId
        }
      });
    } else {
      cart = await prisma.cartItem.create({
        data: {
          quantity,
          productId,
          userId,
          colorId
        }
      });
    }

    return NextResponse.json({
      data: cart
    });
  } catch (error) {
    console.log('[PRODUCTS_POST]', error);
    return NextResponse.json('Internal error', { status: 500 });
  }
}
