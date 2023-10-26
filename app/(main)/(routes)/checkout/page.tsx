import BackButton from '@/components/BackButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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

      <div className='container'>
        <div className='my-6 grid grid-cols-3'>
          <Card>
            <CardHeader>
              <CardTitle>Thông tin đặt hàng</CardTitle>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
