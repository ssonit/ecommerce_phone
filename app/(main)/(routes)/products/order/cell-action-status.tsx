'use client';

import { useMemo } from 'react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { OrderColumn } from './columns';

export default function CellActionStatus({ data }: { data: OrderColumn }) {
  const isPaid = useMemo(() => data.isPaid, [data.isPaid]);
  return (
    <div
      className={cn(
        isPaid &&
          `${buttonVariants({
            variant: 'outline'
          })} border-blue-500 font-medium text-blue-800 hover:text-blue-800 `
      )}
    >
      {isPaid ? 'Đã thanh toán' : 'Chưa thanh toán'}
    </div>
  );
}
