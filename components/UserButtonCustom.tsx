'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useClerk } from '@clerk/nextjs';

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
          <Avatar className='h-8 w-8'>
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
          <DropdownMenuItem>
            <Link href={'/products/create'}>Tạo sản phẩm</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <button onClick={() => signOut(() => router.push('/'))}>Đăng xuất</button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
