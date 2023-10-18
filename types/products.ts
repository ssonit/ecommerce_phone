import { Image, Product } from '@prisma/client';

export type ProductImage = Product & {
  images: Image[];
};
