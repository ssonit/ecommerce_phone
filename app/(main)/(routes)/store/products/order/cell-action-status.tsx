'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { statusOrder } from '@/constants/utils';
import axios from 'axios';
import toast from 'react-hot-toast';
import { OrderColumn } from './columns';

export default function CellActionStatus({ data }: { data: OrderColumn }) {
  const router = useRouter();
  const [status, setStatus] = useState(() => data.isPaid);

  const handleChangeStatus = async (value: string) => {
    try {
      const res = await axios.patch(`/api/order/${data.id}`, {
        isPaid: value === statusOrder.SUCCESS ? true : false
      });

      console.log(res.data);
      router.refresh();
      toast.success('Đã cập nhật trạng thái thành công');
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <Select onValueChange={handleChangeStatus} defaultValue={data.isPaid ? statusOrder.SUCCESS : statusOrder.PENDING}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder={data.status} />
      </SelectTrigger>
      <SelectContent className='w-full'>
        <SelectItem value={statusOrder.PENDING}>Chưa thanh toán</SelectItem>
        <SelectItem value={statusOrder.SUCCESS}>Đã thanh toán</SelectItem>
      </SelectContent>
    </Select>
  );
}
