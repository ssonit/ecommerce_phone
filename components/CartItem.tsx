import Image from 'next/image';
import { Icons } from '@/components/Icons';
import Quantity from '@/components/Quantity';
import { Button } from '@/components/ui/button';
import { CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

export default function CartItem() {
  return (
    <div className='mt-3 flex gap-6'>
      <Checkbox className='mt-4'></Checkbox>
      <div className='flex flex-1'>
        <div className='h-28 w-28'>
          <Image
            src='https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro_2__2.png'
            // src={
            //   'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/m/2/m2_pro_14.png'
            // }
            alt='product-item'
            className='h-auto w-full select-none rounded-lg object-cover'
            width={200}
            height={200}
            sizes='(max-width: 50px) 2vw, (max-width: 425px) 50vw, 75vw'
            quality={100} //default 75
          ></Image>
        </div>
        <div className='flex-1'>
          <CardTitle className='mt-2 text-2xl'>Xiaomi Redmi Note 12 Pro</CardTitle>
          <p className='font-semibold text-red-600'>21.000.000đ</p>
        </div>
      </div>

      <div className='flex items-center gap-5'>
        <Quantity></Quantity>
        <Button variant={'destructive'}>
          <Icons.Trash className='h-5 w-5'></Icons.Trash>
        </Button>
      </div>
    </div>
  );
}
