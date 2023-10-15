import Image from 'next/image';
import { Icons } from '@/components/Icons';
import ProductForm from '@/components/ProductForm';
import { Button } from '@/components/ui/button';

export default function CreateProduct() {
  return (
    <section>
      <div className='container'>
        <div className='my-5 border-b border-gray-300 pb-3'>
          <h2 className='text-2xl font-semibold'>Tạo sản phẩm</h2>
          <p className='text-sm text-muted-foreground'>Thêm sản phẩm mới</p>
        </div>

        <div>
          <div className='flex items-center gap-9'>
            <div className='font-medium'>Hình ảnh</div>

            <Button className='gap-2'>
              <Icons.ImagePlus></Icons.ImagePlus>
              <span>Tải hình ảnh lên</span>
            </Button>
          </div>

          <div className={'my-4 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5'}>
            {new Array(5).fill(0).map((_, index) => (
              <div key={index} className='shadow-lg'>
                <Image
                  src={
                    'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/m/2/m2_pro_14.png'
                  }
                  alt='product-item'
                  className='h-auto w-full select-none rounded-lg object-cover'
                  width={400}
                  height={400}
                  sizes='(max-width: 50px) 2vw, (max-width: 425px) 50vw, 75vw'
                  quality={100} //default 75
                ></Image>
              </div>
            ))}
          </div>

          <ProductForm></ProductForm>
        </div>
      </div>
    </section>
  );
}
