import { getProductId } from '@/actions/products';
import InfoProduct from '@/components/InfoProduct';

export default async function DetailProduct({ params }: { params: { productId: string } }) {
  const product = await getProductId({
    productId: params.productId
  });

  if (!product) return null;
  return (
    <div className='container'>
      <div className='mt-10'>
        <InfoProduct product={product}></InfoProduct>
      </div>
    </div>
  );
}
