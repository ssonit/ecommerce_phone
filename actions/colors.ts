import { prisma } from '@/lib/prismadb';

export const getColors = async () => {
  const data = await prisma.color.findMany();
  return data;
};
