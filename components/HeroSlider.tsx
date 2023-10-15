'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { Icons } from './Icons';

const images = [
  'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png',
  'https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png',
  'https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png'
];
export default function HeroSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <div className='relative'>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        grabCursor={true}
        draggable={true}
        loop={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {images.map((image, index) => (
          <SwiperSlide className='w-full' key={index}>
            <div className='w-full'>
              <AspectRatio ratio={16 / 7}>
                <Image src={image} alt='Image' fill className='rounded-md object-cover' />
              </AspectRatio>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Button
        className='absolute top-1/2 z-20 h-12 w-12 -translate-y-1/2 rounded-full p-2.5'
        variant={'outline'}
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <Icons.ChevronLeft></Icons.ChevronLeft>
      </Button>
      <Button
        className='absolute right-0 top-1/2 z-20 h-12 w-12 -translate-y-1/2 rounded-full p-2.5'
        variant={'outline'}
        onClick={() => swiperRef.current?.slideNext()}
      >
        <Icons.ChevronRight></Icons.ChevronRight>
      </Button>
    </div>
  );
}
