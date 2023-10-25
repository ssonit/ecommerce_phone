import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';

export async function DELETE(req: NextRequest, { params }: { params: { cartId: string } }) {
  try {
    const { userId } = auth();
    const { cartId } = params;

    if (!userId) {
      return NextResponse.json('Unauthorized', { status: 403 });
    }

    const data = await prisma.cartItem.delete({
      where: {
        id: cartId
      }
    });

    return NextResponse.json(data);
  } catch (error) {
    console.log('[CART_ITEM_DELETE]', error);
    return NextResponse.json('Internal error', { status: 500 });
  }
}
