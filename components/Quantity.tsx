'use client';

import { useState } from 'react';
import { Icons } from '@/components/Icons';
import { Button } from './ui/button';

export default function Quantity() {
  const [quantityProduct, setQuantityProduct] = useState(1);

  const handleChangeQuantity = (type: 'increase' | 'decrease') => {
    if (type === 'increase') {
      setQuantityProduct(quantityProduct + 1);
    }
    if (type === 'decrease' && quantityProduct > 1) {
      setQuantityProduct(quantityProduct - 1);
    }
  };
  return (
    <div className='flex items-center gap-2 rounded-full bg-slate-300 p-1'>
      <Button
        onClick={() => handleChangeQuantity('decrease')}
        variant={'ghost'}
        className='flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white px-1'
      >
        <Icons.Minus></Icons.Minus>
      </Button>
      <div className='w-8 text-center'>{quantityProduct}</div>
      <Button
        onClick={() => handleChangeQuantity('increase')}
        variant={'ghost'}
        className='flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white px-1'
      >
        <Icons.Plus></Icons.Plus>
      </Button>
    </div>
  );
}
