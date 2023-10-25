import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prismadb';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const params = Object.fromEntries(searchParams.entries());

    const { page, limit } = params;

    const page_size = parseInt(limit) || 10;
    const skip = parseInt(page) > 0 ? (parseInt(page) - 1) * page_size : 0;

    const data = await prisma.product.findMany({
      include: {
        images: true
      },
      take: page_size,
      skip: skip
    });

    return NextResponse.json({ data });
  } catch (error) {
    console.log('[PRODUCTS_GET]', error);
    return NextResponse.json('Internal error', { status: 500 });
  }
}
