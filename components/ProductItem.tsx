import Image from 'next/image';
import Link from 'next/link';
import { Icons } from '@/components/Icons';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProductItem({
  src = 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/m/2/m2_pro_14.png'
}: {
  src?: string;
}) {
  return (
    <Link href={'/redmi'}>
      <Card className='cursor-pointer border-slate-400 shadow-xl'>
        <div>
          <Image
            src={src}
            alt='product-item'
            className='h-auto w-full select-none rounded-lg object-cover'
            width={400}
            height={400}
            sizes='(max-width: 50px) 2vw, (max-width: 425px) 50vw, 75vw'
            quality={100} //default 75
          ></Image>
        </div>
        <CardHeader className='px-3 pb-4'>
          <CardTitle className='text-base'>Xiaomi Redmi Note 12 Pro</CardTitle>
        </CardHeader>
        <CardContent className='px-3 pb-3'>
          <p className='font-semibold text-red-600'>21.000.000đ</p>
        </CardContent>
        <CardFooter className='flex items-center justify-between px-3 pb-2'>
          <div className='flex items-center gap-1'>
            <Icons.Star className='h-4 w-4 stroke-yellow-400'></Icons.Star>
            <span className='text-sm'>4.9</span>
          </div>
          <Button className='h-9 w-9 rounded-full p-2'>
            <Icons.Plus className='h-5 w-5'></Icons.Plus>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
