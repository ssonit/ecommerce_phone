import { Image, Product } from '@prisma/client';

export interface ProductImage extends Product {
  images: Image[];
}
