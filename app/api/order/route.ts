import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prismadb';
import { ProductCheckout } from '@/types/products';
import { auth } from '@clerk/nextjs';

export async function POST(req: NextRequest) {
  try {
    const { userId } = auth();

    const body = await req.json();

    const product_order = body.productOrder as ProductCheckout[];
    const { username, phone, address, notes, payment_type } = body;

    if (!userId) {
      return NextResponse.json('Unauthorized', { status: 403 });
    }
    if (!product_order || product_order.length === 0) {
      return NextResponse.json('Product order not found', { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userId
      }
    });

    const data = await prisma.orderItem.createMany({
      data: product_order.map((item) => ({
        userId,
        productId: item.id,
        colorId: item.color.id,
        quantity: item.quantity,
        username: username || user?.username,
        phone: phone || user?.phone,
        address: address || user?.address,
        notes
      }))
    });

    return NextResponse.json({
      data
    });
  } catch (error) {
    console.log('[PRODUCTS_POST]', error);
    return NextResponse.json('Internal error', { status: 500 });
  }
}
