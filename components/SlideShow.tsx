'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';

const images = [
  'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png',
  'https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png',
  'https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png'
];
const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 200 : -200,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 200 : -200,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 200;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function SlideShow() {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <div className='relative w-full overflow-x-hidden'>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial='enter'
          animate='center'
          exit='exit'
          className='w-full'
          drag='x'
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div className='next absolute left-0 top-0 rounded-full bg-white p-2' onClick={() => paginate(-1)}>
        {'prev'}
      </div>
      <div className='prev absolute right-0 top-0 rounded-full bg-white p-2' onClick={() => paginate(1)}>
        {'next'}
      </div>
    </div>
  );
}
