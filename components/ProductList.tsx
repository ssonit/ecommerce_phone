import ProductItem from '@/components/ProductItem';
import { cn } from '@/lib/utils';

export default function ProductList({ className }: { className?: string }) {
  return (
    <div className={cn('grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5', className)}>
      <ProductItem></ProductItem>
      <ProductItem src='https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro_2__2.png'></ProductItem>
      <ProductItem></ProductItem>
      <ProductItem></ProductItem>
      <ProductItem></ProductItem>
      <ProductItem></ProductItem>
      <ProductItem></ProductItem>
      <ProductItem></ProductItem>
      <ProductItem></ProductItem>
      <ProductItem></ProductItem>
    </div>
  );
}
