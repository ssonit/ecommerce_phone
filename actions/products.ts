import { prisma } from '@/lib/prismadb';

export const getProducts = async (sort: 'desc' | 'asc' = 'desc') => {
  const data = await prisma.product.findMany({
    include: {
      images: true
    },
    orderBy: {
      createdAt: sort
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
