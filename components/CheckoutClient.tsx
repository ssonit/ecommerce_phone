'use client';

import CheckoutFormInfo from '@/components/CheckoutFormInfo';
import CheckoutFormPayment from '@/components/CheckoutFormPayment';
import CheckoutFormSummary from '@/components/CheckoutFormSummary';
import { Form } from '@/components/ui/form';
import { formCheckoutSchema } from '@/constants/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = formCheckoutSchema;

export default function CheckoutClient() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      info: {
        username: '',
        address: '',
        phone: '',
        notes: ''
      },
      payment: {
        type: 'cod'
      }
    }
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
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
