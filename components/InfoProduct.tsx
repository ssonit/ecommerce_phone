import Image from 'next/image';
import Divider from '@/components/Divider';
import { Icons } from '@/components/Icons';
import ProductList from '@/components/ProductList';
import Quantity from '@/components/Quantity';
import ReviewItem from '@/components/ReviewItem';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ProductImage } from '@/types/products';

export default function InfoProduct({ product }: { product: ProductImage }) {
  const { images, name, price, description } = product;
  return (
    <div>
      <Card className='mb-10'>
        <div className='grid grid-cols-1 gap-3 lg:grid-cols-12'>
          <div className='col-span-1 lg:col-span-5'>
            <div className='p-2'>
              <AspectRatio ratio={1 / 1} className='relative w-full'>
                <Image
                  src={images[0].url}
                  alt={name}
                  className='h-full w-full select-none rounded-md object-cover transition'
                  fill
                  sizes='(max-width: 50px) 2vw, (max-width: 425px) 50vw, 75vw'
                  quality={100} //default 75
                ></Image>
              </AspectRatio>
            </div>
          </div>
          <div className='col-span-1 mt-16 md:mt-0 lg:col-span-7'>
            <CardHeader className='px-3 pb-4'>
              <CardTitle className='text-2xl'>{name}</CardTitle>
              {/* <div className='flex items-center gap-1'>
                <Icons.Star></Icons.Star>
                <Icons.Star></Icons.Star>
                <Icons.Star></Icons.Star>
                <Icons.Star></Icons.Star>
                <Icons.Star></Icons.Star>
              </div> */}
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className='px-3 pb-3'>
              <div className='rounded bg-gray-100 px-6 py-3 font-semibold text-red-600'>{price.toString()}</div>
              <div className='mt-6 flex items-center gap-6'>
                <span className='w-20'>Màu</span>
                <div className='flex items-center gap-3'>
                  <div className='h-4 w-4 cursor-pointer rounded-full bg-blue-600'></div>
                  <div className='h-4 w-4 cursor-pointer rounded-full bg-red-600'></div>
                  <div className='h-4 w-4 cursor-pointer rounded-full bg-purple-600'></div>
                </div>
              </div>

              <div className='mt-6 flex items-center gap-6'>
                <span className='w-20'>Số lượng</span>
                <Quantity></Quantity>
              </div>
            </CardContent>
            <CardFooter className='mt-3 flex items-center gap-6 px-3 pb-2'>
              <Button variant={'outline'}>
                <Icons.Heart className='stroke-pink-500'></Icons.Heart>
              </Button>
              <Button variant={'outline'}>Thêm vào giỏ hàng</Button>
              <Button>Mua ngay</Button>
            </CardFooter>
          </div>
        </div>
      </Card>

      <Card>
        <CardContent>
          <section className='my-9'>
            <div className='text-lg font-bold'>Đánh giá sản phẩm</div>
            <div className='mt-4'>
              <ReviewItem></ReviewItem>
            </div>
          </section>
        </CardContent>
      </Card>
      <div className='mb-5'>
        <Divider className='my-5'>Có thể bạn cũng thích</Divider>
        <ProductList></ProductList>
      </div>
    </div>
  );
}
