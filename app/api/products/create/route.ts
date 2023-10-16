import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';

export async function POST(req: NextRequest) {
  try {
    const { userId } = auth();

    const body = await req.json();

    const { name, price, description } = body;

    const colors = [
      {
        id: '1fbdf27a-27ec-49e0-880d-a2ab44b13692'
      }
    ];

    const images = [
      {
        url: 'https://images.unsplash.com/photo-1696677528468-7b5af2d5363b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1898&q=80'
      }
    ];

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

    if (!colors || !colors.length) {
      return NextResponse.json('Colors is required', { status: 400 });
    }

    const product = await prisma.product.create({
      data: {
        name,
        price,
        userId,
        description,
        colors: {
          connect: [...colors.map((item: { id: string }) => item)]
        },
        images: {
          createMany: {
            data: [...images.map((item: { url: string }) => item)]
          }
        }
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
