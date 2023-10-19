import { getProducts } from '@/actions/products';
import { Icons } from '@/components/Icons';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { formatDate } from '@/constants/format';
import { columns } from './columns';

export default async function ManageProducts() {
  const data = await getProducts();

  const formattedData = data.map((item) => ({
    id: item.id,
    name: item.name,
    price: item.price.toString(),
    createdAt: formatDate(item.createdAt.toISOString())
  }));
  return (
    <div className='container'>
      <div className='my-4 flex items-center justify-between'>
        <SectionTitle title='Sản phẩm (1)' desc='Quản lý sản phẩm của bạn'></SectionTitle>

        <Button>
          <Icons.Plus className='mr-2 h-4 w-4'></Icons.Plus>
          <span>Tạo sản phẩm</span>
        </Button>
      </div>
      <Separator></Separator>

      <div className='my-4'>
        <Input
          placeholder='Tìm kiếm'
          className='mb-3 w-80 outline-none placeholder:text-black focus-visible:ring-0 focus-visible:ring-transparent'
        ></Input>

        <DataTable columns={columns} data={formattedData}></DataTable>
      </div>
    </div>
  );
}
