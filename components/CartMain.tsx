'use client';

import { useMemo, useState } from 'react';
import CartProductItem from '@/components/CartProductItem';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { TCartProductItem } from '@/types/carts';

export default function CartMain({ initCarts }: { initCarts: TCartProductItem[] }) {
  const [carts, setCarts] = useState(initCarts.map((item) => ({ ...item, checked: false })));

  const checkAll = useMemo(() => !carts.some((item) => !item.checked), [carts]);

  const totalPrice = useMemo(
    () =>
      carts
        .filter((item) => item.checked)
        .reduce((total, item) => total + Number(item.product.price.toString()) * item.quantity, 0),
    [carts]
  );

  const handleChangeQuantityCarts = ({ id, quantity }: { id: string; quantity: number }) => {
    setCarts((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity
          };
        }
        return item;
      });
    });
  };

  const handleCheckAll = () => {
    if (checkAll) {
      setCarts((prev) =>
        prev.map((item) => ({
          ...item,
          checked: false
        }))
      );
    } else {
      setCarts((prev) =>
        prev.map((item) => ({
          ...item,
          checked: true
        }))
      );
    }
  };

  const handleChecked = ({ id, checked }: { id: string; checked: boolean }) => {
    setCarts((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            checked
          };
        }
        return item;
      });
    });
  };

  return (
    <>
      <div className='container min-h-screen'>
        <div className='my-4 flex items-center gap-2'>
          <Checkbox id='select-all' checked={checkAll} onCheckedChange={handleCheckAll}></Checkbox>
          <label htmlFor='select-all' className='select-none'>
            Chọn tất cả
          </label>
        </div>

        <Card>
          <CardContent className='flex flex-col gap-2'>
            {carts.map((item) => (
              <CartProductItem
                key={item.id}
                cartItem={item}
                handleChecked={handleChecked}
                handleChange={handleChangeQuantityCarts}
              ></CartProductItem>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className='sticky bottom-0 left-0 right-0 bg-white'>
        <div className='container flex items-center justify-between py-3'>
          <div>
            <p className='font-semibold text-red-600'>{totalPrice}</p>
          </div>
          <Button>Mua ngay</Button>
        </div>
      </div>
    </>
  );
}
