import BackButton from '@/components/BackButton';
import CheckoutClient from '@/components/CheckoutClient';
import { Separator } from '@/components/ui/separator';

export default function Checkout() {
  return (
    <section>
      <div>
        <div className='container flex items-center gap-8 py-5'>
          <BackButton></BackButton>
          <div className='select-none text-2xl font-semibold'>Thanh toán</div>
        </div>
      </div>

      <Separator></Separator>

      <CheckoutClient></CheckoutClient>
    </section>
  );
}
