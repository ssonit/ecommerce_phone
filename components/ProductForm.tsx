'use client';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string(),
  price: z.coerce.number(),
  description: z.string(),
  images: z.object({ url: z.string() }).array()
});

export default function ProductForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      price: 0,
      description: '',
      images: []
    }
  });

  const {
    formState: { isSubmitting }
  } = form;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await axios.post('/api/products/create', {
        name: values.name,
        price: values.price,
        description: values.description
      });

      const data = res.data;

      console.log({ data });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-8'>
        <div className='gap-8 md:grid md:grid-cols-3'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tên</FormLabel>
                <FormControl>
                  <Input disabled={isSubmitting} placeholder='Tên sản phẩm' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mô tả sản phẩm</FormLabel>
                <FormControl>
                  <Input disabled={isSubmitting} placeholder='Mô tả' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='price'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Giá</FormLabel>
                <FormControl>
                  <Input type='number' disabled={isSubmitting} placeholder='9.99' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button disabled={isSubmitting} className='ml-auto' type='submit'>
          Tạo
        </Button>
      </form>
    </Form>
  );
}
