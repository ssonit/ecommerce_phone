'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import toast from 'react-hot-toast';
import { OrderColumn } from './columns';

export default function CellAction({ data }: { data: OrderColumn }) {
  const router = useRouter();
  const handleDelete = async () => {
    try {
      const res = await axios.delete(`/api/order/${data.id}`);

      console.log({ res });

      router.refresh();

      toast.success('Hủy đơn hàng thành công');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button variant={'destructive'} onClick={handleDelete}>
      Hủy
    </Button>
  );
}
