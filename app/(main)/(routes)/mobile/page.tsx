import { getProducts } from '@/actions/products';
import { Icons } from '@/components/Icons';
import ProductList from '@/components/ProductList';
import { Button } from '@/components/ui/button';

export default async function Mobile() {
  const products = await getProducts();
  return (
    <div className='container'>
      <section className='my-5'>
        <h4 className='text-2xl font-semibold'>Sắp xếp theo</h4>
        <div className='mt-3 flex items-center gap-4'>
          <Button variant={'outline'} className='gap-2'>
            <Icons.ArrowDownNarrowWide></Icons.ArrowDownNarrowWide>
            <span>Giá cao - thấp</span>
          </Button>
          <Button variant={'outline'} className='gap-2'>
            <Icons.ArrowUpNarrowWide></Icons.ArrowUpNarrowWide>
            <span>Giá thấp - cao</span>
          </Button>
        </div>
      </section>
      <section>
        <ProductList data={products}></ProductList>
      </section>
    </div>
  );
}
