import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prismadb';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const params = Object.fromEntries(searchParams.entries());

    const { search } = params;

    const data = await prisma.product.findMany({
      where: {
        name: {
          contains: search
        }
      },
      take: 10
    });

    return NextResponse.json({ data });
  } catch (error) {
    console.log('[PRODUCTS_GET]', error);
    return NextResponse.json('Internal error', { status: 500 });
  }
}
