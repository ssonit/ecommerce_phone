import { Icons } from '@/components/Icons';

export default function Quantity() {
  return (
    <div className='flex items-center gap-2 rounded-full bg-slate-300 p-1'>
      <div className='flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white px-1'>
        <Icons.Minus></Icons.Minus>
      </div>
      <div>1</div>
      <div className='flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white px-1'>
        <Icons.Plus></Icons.Plus>
      </div>
    </div>
  );
}
