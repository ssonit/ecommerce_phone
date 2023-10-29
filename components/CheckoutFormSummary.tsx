'use client';

import Image from 'next/image';
import { useContext } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Separator } from '@/components/ui/separator';
import { formCheckoutSchema } from '@/constants/schema';
import { AppContext } from '@/providers/app-provider';
import { useFormContext } from 'react-hook-form';
import * as z from 'zod';
import { Button } from './ui/button';

const formSchema = formCheckoutSchema;

export default function CheckoutFormSummary() {
  const { productOrder } = useContext(AppContext);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Thông tin giỏ hàng</CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='flex flex-col'>
          {productOrder.map((item) => (
            <div key={item.id} className='flex flex-1 cursor-pointer gap-3'>
              <div className='w-16'>
                <AspectRatio ratio={1 / 1} className='relative h-full'>
                  <Image
                    src={item.image}
                    alt={item.name}
                    className='h-full w-full select-none rounded-md object-cover transition'
                    fill
                    sizes='(max-width: 50px) 2vw, (max-width: 425px) 50vw, 75vw'
                    quality={100} //default 75
                  ></Image>
                </AspectRatio>
              </div>
              <div className='flex flex-1 items-center justify-between'>
                <div>
                  <CardTitle className='text-sm'>{item.name}</CardTitle>
                  <p className='text-sm font-semibold text-muted-foreground'>{item.price}</p>
                  <p className='text-sm font-medium'>Màu: {item.color}</p>
                </div>
                <div>x{item.quantity}</div>
              </div>
            </div>
          ))}
        </div>

        <div className='flex flex-col gap-1.5'>
          <div className='flex items-center justify-between text-sm'>
            <span>Tổng:</span>
            <span>66.000đ</span>
          </div>
          <div className='flex items-center justify-between text-sm'>
            <span>Phí vận chuyển:</span>
            <span>0đ</span>
          </div>
          <div className='flex items-center justify-between text-sm'>
            <span>Giảm:</span>
            <span>0đ</span>
          </div>
        </div>

        <Separator></Separator>
        <div className='flex items-center justify-between text-xl font-semibold'>
          <span>Tổng tiền:</span>
          <span>66.000đ</span>
        </div>

        <Button type='submit' className='w-full'>
          Đặt hàng
        </Button>
      </CardContent>
    </Card>
  );
}
