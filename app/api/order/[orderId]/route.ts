import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';

export async function DELETE(req: NextRequest, { params }: { params: { orderId: string } }) {
  try {
    if (!params.orderId) {
      return NextResponse.json('Order id is required', { status: 400 });
    }

    const { userId } = auth();

    if (!userId) {
      return NextResponse.json('Unauthorized', { status: 403 });
    }

    await prisma.orderItem.delete({
      where: {
        id: params.orderId
      }
    });

    return NextResponse.json('Delete order successfully');
  } catch (error) {
    console.log('[ORDER_DELETE]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
