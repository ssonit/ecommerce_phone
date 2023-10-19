import ProductForm from '@/components/ProductForm';
import SectionTitle from '@/components/SectionTitle';
import { Separator } from '@/components/ui/separator';

export default function EditProduct() {
  return (
    <section>
      <div className='container'>
        <SectionTitle className='my-3' title='Sửa sản phẩm' desc='Chỉnh sửa'></SectionTitle>
        <Separator></Separator>

        <div className='mt-3'>
          <ProductForm></ProductForm>
        </div>
      </div>
    </section>
  );
}
