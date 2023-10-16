import Image from 'next/image';
import Link from 'next/link';
import SearchBar from '@/components/SearchBar';
import UserButtonCustom from '@/components/UserButtonCustom';
import NavbarList from './NavbarList';

export default function Navbar() {
  return (
    <nav className='sticky left-0 top-0 z-40 w-full bg-white bg-opacity-40 py-3 shadow-2xl'>
      <div className='container flex items-center justify-between'>
        <Link href={'/'} className='flex-shrink-0'>
          <Image src={'/logo.png'} alt='logo' width={40} height={40}></Image>
        </Link>
        <div className='ml-6 mr-2 w-[50%] lg:ml-56'>
          <SearchBar></SearchBar>
        </div>
        <NavbarList></NavbarList>
        <div className='hidden md:block'>
          <UserButtonCustom></UserButtonCustom>
        </div>
      </div>
    </nav>
  );
}
