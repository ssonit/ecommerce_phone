import { prisma } from '@/lib/prismadb';
import { SortDirection } from '@/types/products';

export const getProducts = async (
  sort: Record<string, SortDirection> = {
    createdAt: 'desc'
  }
) => {
  const data = await prisma.product.findMany({
    include: {
      images: true
    },
    orderBy: {
      ...sort
    }
  });

  return data;
};

export const getProductId = async ({ productId }: { productId: string }) => {
  const data = await prisma.product.findUnique({
    where: {
      id: productId
    },
    include: {
      images: true
    }
  });

  return data;
};
