import { getColors } from '@/actions/colors';
import { getProductId } from '@/actions/products';
import InfoProduct from '@/components/InfoProduct';

export default async function DetailProduct({ params }: { params: { productId: string } }) {
  const product = await getProductId({
    productId: params.productId
  });

  const colors = await getColors();

  if (!product) return null;
  return (
    <div className='container'>
      <div className='mt-10'>
        <InfoProduct product={product} colors={colors}></InfoProduct>
      </div>
    </div>
  );
}
