'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Icons } from '@/components/Icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { UserButton, useUser } from '@clerk/nextjs';

export default function Navbar() {
  const router = useRouter();
  const { user } = useUser();
  return (
    <nav className='sticky left-0 top-0 z-50 w-full bg-white bg-opacity-40 py-3 shadow-2xl'>
      <div className='container flex items-center justify-between'>
        <Link href={'/'} className='flex-shrink-0'>
          <Image src={'/logo.png'} alt='logo' width={40} height={40}></Image>
        </Link>
        <div className='ml-6 mr-2 w-[50%] lg:ml-56'>
          <Input className='placeholder:text-black' placeholder='Tìm kiếm'></Input>
        </div>
        <ul className='ml-auto flex items-center gap-9 md:mr-6'>
          <li className='hidden cursor-pointer md:block' onClick={() => router.push('/cart')}>
            <Icons.ShoppingCart className='stroke-black'></Icons.ShoppingCart>
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
        <div className='hidden md:block'>
          {user ? (
            <UserButton afterSignOutUrl='/'></UserButton>
          ) : (
            <Button variant={'outline'} onClick={() => router.push('/sign-in')}>
              Đăng nhập
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}
