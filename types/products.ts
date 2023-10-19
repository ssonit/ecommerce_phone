import { Image, Product } from '@prisma/client';

export type ProductImage = Product & {
  images: Image[];
};

export type SortDirection = 'asc' | 'desc';
