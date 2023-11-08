'use client';

import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import CheckoutFormInfo from '@/components/CheckoutFormInfo';
import CheckoutFormPayment from '@/components/CheckoutFormPayment';
import CheckoutFormSummary from '@/components/CheckoutFormSummary';
import { Form } from '@/components/ui/form';
import { PaymentType } from '@/constants/enums';
import { formCheckoutSchema } from '@/constants/schema';
import { AppContext } from '@/providers/app-provider';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as z from 'zod';

const formSchema = formCheckoutSchema;

export default function CheckoutClient() {
  const router = useRouter();
  const { productOrder, currentUser } = useContext(AppContext);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      info: {
        username: currentUser?.username || '',
        address: currentUser?.address || '',
        phone: currentUser?.phone || '',
        notes: ''
      },
      payment: {
        type: PaymentType.COD
      }
    }
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const res = await axios.post('/api/order', {
        productOrder,
        username: values.info.username,
        address: values.info.address,
        phone: values.info.phone,
        notes: values.info.notes,
        payment_type: values.payment.type
      });
      const data = res.data;
      router.refresh();
      toast.success('Đặt hàng thành công');
      router.push('/products/order');
      console.log({ data });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='container'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <div className='my-6 grid grid-cols-1 items-start gap-3 lg:grid-cols-3'>
            <CheckoutFormInfo></CheckoutFormInfo>
            <CheckoutFormPayment></CheckoutFormPayment>
            <CheckoutFormSummary></CheckoutFormSummary>
          </div>
        </form>
      </Form>
    </div>
  );
}
