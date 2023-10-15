import InfoProduct from '@/components/InfoProduct';

export default function DetailProduct({ params }: { params: { productId: string } }) {
  console.log({ params });
  return (
    <div className='container'>
      <div className='mt-10'>
        <InfoProduct></InfoProduct>
      </div>
    </div>
  );
}
