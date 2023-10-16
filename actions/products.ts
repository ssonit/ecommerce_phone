import { prisma } from '@/lib/prismadb';

export const getProducts = async () => {
  const data = await prisma.product.findMany({
    include: {
      images: true
    },
    orderBy: {
      createdAt: 'desc'
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
