import SectionTitle from '@/components/SectionTitle';
import { DataTable } from '@/components/ui/data-table';
import { Separator } from '@/components/ui/separator';
import { formatDate } from '@/constants/format';
import { prisma } from '@/lib/prismadb';
import { columns } from './columns';

export default async function ManageOrder() {
  const data = await prisma.orderItem.findMany({
    include: {
      product: true,
      color: true
    }
  });
  const formattedData = data.map((item) => ({
    id: item.id,
    name: item.product.name,
    price: item.product.price.toString(),
    color: item.color.name,
    total: Number(item.product.price.toString()) * item.quantity,
    isPaid: item.isPaid ? 'Đã thanh toán' : 'Chưa thanh toán',
    quantity: item.quantity,
    createdAt: formatDate(item.createdAt.toISOString())
  }));
  return (
    <div className='container'>
      <div className='my-4 flex items-center justify-between'>
        <SectionTitle title={`Đơn hàng`} desc='Đơn hàng đã đặt'></SectionTitle>
      </div>
      <Separator></Separator>
      <div className='my-4'>
        <DataTable columns={columns} data={formattedData}></DataTable>
      </div>
    </div>
  );
}
