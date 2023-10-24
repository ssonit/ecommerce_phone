import Image from 'next/image';
import CartItemClient from '@/components/CartItemClient';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { TCartProductItem } from '@/types/carts';

export default function CartProductItem({
  cartItem,
  handleChange,
  handleChecked
}: {
  cartItem: TCartProductItem & {
    checked: boolean;
  };
  handleChange: ({ id, quantity }: { id: string; quantity: number }) => void;
  handleChecked: ({ id, checked }: { id: string; checked: boolean }) => void;
}) {
  const {
    product: { images, name, price },
    quantity,
    color,
    id,
    checked
  } = cartItem;

  return (
    <div className='mt-3 flex gap-6'>
      <Checkbox
        className='mt-4'
        checked={checked}
        onCheckedChange={() => handleChecked({ id, checked: !checked })}
      ></Checkbox>
      <div className='flex flex-1 gap-3'>
        <div className='w-24'>
          <AspectRatio ratio={2 / 3} className='relative h-full'>
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
        <div className='flex-1'>
          <CardTitle className='mt-2 text-2xl'>{name}</CardTitle>
          <p className='font-semibold text-red-600'>{price.toString()}</p>
          <p>Màu: {color.name}</p>
        </div>
      </div>

      <CartItemClient amount={quantity} cartId={id} handleChangeValue={handleChange}></CartItemClient>
    </div>
  );
}
