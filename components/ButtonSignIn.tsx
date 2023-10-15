import { Icons } from '@/components/Icons';

export default function ButtonSignIn() {
  return (
    <button className='group relative mt-4 w-full items-center justify-center overflow-hidden rounded-lg border hover:bg-zinc-200'>
      <div className='relative flex w-full items-center gap-3 rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
        <Icons.Google className='h-5 w-5'></Icons.Google>
        <div className='text-sm font-medium'>Continue with Google</div>
        <Icons.ArrowRight className='ml-auto h-5 w-5 -translate-x-4 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100'></Icons.ArrowRight>
      </div>
    </button>
  );
}
