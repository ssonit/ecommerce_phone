'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
// import { CldUploadWidget } from 'next-cloudinary';
import { Icons } from './Icons';

interface ImageUploadProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}

export default function ImageUpload({ disabled, onChange, onRemove, value }: ImageUploadProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <div className='mb-4 flex items-center gap-4'>
        {value.map((url) => (
          <div key={url} className='relative h-[200px] w-[200px] overflow-hidden rounded-md'>
            <div className='absolute right-2 top-2 z-10'>
              <Button type='button' onClick={() => onRemove(url)} variant='destructive' size='sm'>
                <Icons.Trash className='h-4 w-4'></Icons.Trash>
              </Button>
            </div>
            <Image fill className='object-cover' alt='Image' src={url} />
          </div>
        ))}
      </div>
      {/* <CldUploadWidget onUpload={onUpload} uploadPreset='t4drjppf'>
        {({ open }) => {
          const onClick = () => {
            open();
          };

          return (
            <Button type='button' disabled={disabled} variant='secondary' onClick={onClick}>
              <Icons.Plus className='w-4 h-4 mr-2' />
              Upload an Image
            </Button>
          );
        }}
      </CldUploadWidget> */}
    </div>
  );
}
