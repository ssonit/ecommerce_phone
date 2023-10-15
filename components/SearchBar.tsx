'use client';

import { ChangeEvent, useState } from 'react';
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from '@/components/ui/command';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className='relative'>
      <Input
        className='outline-none placeholder:text-black focus-visible:ring-0 focus-visible:ring-transparent'
        placeholder='Tìm kiếm'
        value={searchInput}
        onChange={handleInputChange}
      ></Input>
      {searchInput && (
        <div className='absolute left-0 top-full w-full'>
          <ScrollArea>
            <Command className='rounded-lg border shadow-md'>
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading='Kết quả tìm kiếm'>
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <CommandItem className='cursor-pointer hover:bg-accent hover:text-accent-foreground ' key={index}>
                        <span>{0}</span>
                      </CommandItem>
                    ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </ScrollArea>
        </div>
      )}
    </div>
  );
}
