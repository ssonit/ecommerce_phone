import ProductForm from '@/components/ProductForm';

export default function CreateProduct() {
  return (
    <section>
      <div className='container'>
        <div className='my-5 border-b border-gray-300 pb-3'>
          <h2 className='text-2xl font-semibold'>Tạo sản phẩm</h2>
          <p className='text-sm text-muted-foreground'>Thêm sản phẩm mới</p>
        </div>

        <div>
          <ProductForm></ProductForm>
        </div>
      </div>
    </section>
  );
}
