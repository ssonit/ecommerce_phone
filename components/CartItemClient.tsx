'use client';

import { useState } from 'react';
import { Icons } from '@/components/Icons';
import Quantity from '@/components/Quantity';
import { Button } from '@/components/ui/button';

export default function CartItemClient({
  amount,
  cartId,
  handleChangeValue
}: {
  amount: number;
  cartId: string;
  handleChangeValue: ({ id, quantity }: { id: string; quantity: number }) => void;
}) {
  const [quantity, setQuantity] = useState(() => amount);

  const handleChange = (value: number) => {
    setQuantity(value);
    handleChangeValue({
      id: cartId,
      quantity: value
    });
  };

  return (
    <div className='flex items-center gap-5'>
      <Quantity quantity={quantity} handleChange={handleChange}></Quantity>
      <Button variant={'destructive'}>
        <Icons.Trash className='h-5 w-5'></Icons.Trash>
      </Button>
    </div>
  );
}
