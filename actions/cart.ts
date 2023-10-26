import { prisma } from '@/lib/prismadb';

export const getCountCart = async (userId: string) => {
  const count = await prisma.cartItem.count({
    where: {
      userId
    }
  });

  return count;
};
