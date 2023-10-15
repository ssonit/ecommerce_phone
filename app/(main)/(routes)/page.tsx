import Heading from '@/components/Heading';
import HeroSlider from '@/components/HeroSlider';
import ProductList from '@/components/ProductList';

export default async function Home() {
  return (
    <div>
      <HeroSlider></HeroSlider>
      <main className='container'>
        <Heading></Heading>
        <ProductList className='my-5'></ProductList>
      </main>
    </div>
  );
}
