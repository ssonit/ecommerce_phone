'use client';

import { useRouter } from 'next/navigation';
import { Icons } from '@/components/Icons';

export default function NavbarList() {
  const router = useRouter();

  return (
    <ul className='ml-auto flex items-center gap-9 md:mr-6'>
      <li className='relative hidden cursor-pointer md:block' onClick={() => router.push('/cart')}>
        <Icons.ShoppingCart className='stroke-black'></Icons.ShoppingCart>
        <div className='absolute -right-3 -top-2.5'>
          <div className='flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-sm text-white'>4</div>
        </div>
      </li>
      <li className='hidden cursor-pointer md:block'>
        <Icons.Heart className='stroke-black'></Icons.Heart>
      </li>
      <li className='hidden cursor-pointer md:block'>
        <Icons.Bell className='stroke-black'></Icons.Bell>
      </li>
      <li className='cursor-pointer md:hidden'>
        <Icons.Menu className='stroke-black'></Icons.Menu>
      </li>
    </ul>
  );
}
