'use client';

import { Button } from '@/components/ui/button';
import { OrderColumn } from './columns';

export default function CellAction({ data }: { data: OrderColumn }) {
  return <Button variant={'destructive'}>Hủy</Button>;
}
