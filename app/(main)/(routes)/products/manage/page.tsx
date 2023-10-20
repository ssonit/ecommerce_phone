import { getManageProducts } from '@/actions/products';
import { Icons } from '@/components/Icons';
import ManageNavigation from '@/components/ManageNavigation';
import ManageSearchProducts from '@/components/ManageSearchProducts';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Separator } from '@/components/ui/separator';
import { formatDate } from '@/constants/format';
import { columns } from './columns';

export default async function ManageProducts({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const search = (searchParams?.search as string) || '';
  const page = searchParams?.page as string;
  const limit = searchParams?.limit as string;

  const { data, total } = await getManageProducts({
    search,
    page,
    limit
  });

  const formattedData = data.map((item) => ({
    id: item.id,
    name: item.name,
    price: item.price.toString(),
    createdAt: formatDate(item.createdAt.toISOString())
  }));
  return (
    <div className='container'>
      <div className='my-4 flex items-center justify-between'>
        <SectionTitle title={`Sản phẩm (${data.length})`} desc='Quản lý sản phẩm của bạn'></SectionTitle>

        <Button>
          <Icons.Plus className='mr-2 h-4 w-4'></Icons.Plus>
          <span>Tạo sản phẩm</span>
        </Button>
      </div>
      <Separator></Separator>
      <div className='my-4'>
        <ManageSearchProducts className='mb-3'></ManageSearchProducts>

        <DataTable columns={columns} data={formattedData}></DataTable>

        <ManageNavigation className='my-3' currentPage={parseInt(page) || 1} total={total}></ManageNavigation>
      </div>
    </div>
  );
}
