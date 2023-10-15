import BackButton from '@/components/BackButton';
import CartItem from '@/components/CartItem';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';

export default function ShoppingCart() {
  return (
    <section className='relative'>
      <div>
        <div className='container flex items-center gap-8 py-5'>
          <BackButton></BackButton>
          <div className='select-none text-2xl font-semibold'>Giỏ hàng của bạn</div>
        </div>
      </div>

      <Separator></Separator>

      <div className='container min-h-screen'>
        <div className='my-4 flex items-center gap-2'>
          <Checkbox id='select-all'></Checkbox>
          <label htmlFor='select-all'>Chọn tất cả</label>
        </div>

        <Card>
          <CardContent className='flex flex-col gap-2'>
            <CartItem></CartItem>
          </CardContent>
        </Card>
      </div>

      <div className='sticky bottom-0 left-0 right-0 bg-white'>
        <div className='container flex items-center justify-between py-3'>
          <div>
            <p className='font-semibold text-red-600'>21.000.000đ</p>
          </div>
          <Button>Mua ngay</Button>
        </div>
      </div>
    </section>
  );
}
