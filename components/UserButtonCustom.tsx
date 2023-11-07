'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { useClerk } from '@clerk/nextjs';
import { Icons } from './Icons';
import { Separator } from './ui/separator';

export default function UserButtonCustom() {
  const { signOut, user } = useClerk();
  const router = useRouter();

  if (!user)
    return (
      <Button variant={'outline'} onClick={() => router.push('/sign-in')}>
        Đăng nhập
      </Button>
    );

  return (
    <div className='h-8'>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className='h-8 w-8 select-none'>
            <AvatarImage src={user.imageUrl} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>
            <div className='flex items-center gap-3'>
              <Avatar className='h-8 w-8'>
                <AvatarImage src={user.imageUrl} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className='text-sm font-medium'>{user.fullName}</div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className='p-0'>
            <Link
              href={'/products/manage'}
              className='flex w-full items-center rounded-md p-2 hover:bg-accent hover:text-accent-foreground'
            >
              <Icons.ListOrdered className='mr-2 h-4 w-4'></Icons.ListOrdered>
              <span>Quản lý sản phẩm</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className='p-0'>
            <Link
              href={'/products/order'}
              className='flex w-full items-center rounded-md p-2 hover:bg-accent hover:text-accent-foreground'
            >
              <Icons.ClipboardList className='mr-2 h-4 w-4'></Icons.ClipboardList>
              <span>Quản lý đơn hàng</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className='p-0'>
            <Link
              href={'/products/create'}
              className='flex w-full items-center rounded-md p-2 hover:bg-accent hover:text-accent-foreground'
            >
              <Icons.PlusSquare className='mr-2 h-4 w-4'></Icons.PlusSquare>
              <span>Tạo sản phẩm</span>
            </Link>
          </DropdownMenuItem>
          <Separator></Separator>
          <DropdownMenuItem className='p-0'>
            <Button variant={'ghost'} size={'sm'} className='my-0.5 w-full justify-start px-2'>
              <Icons.Logout className='mr-2 h-4 w-4'></Icons.Logout> Đăng xuất
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
