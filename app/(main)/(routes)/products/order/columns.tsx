'use client';

import { ColumnDef } from '@tanstack/react-table';
import CellAction from './cell-action';

export type OrderColumn = {
  id: string;
  name: string;
  price: string;
  color: string;
  total: number;
  isPaid: string;
  quantity: number;
  createdAt: string;
};

export const columns: ColumnDef<OrderColumn>[] = [
  {
    accessorKey: 'name',
    header: 'Tên sản phẩm'
  },
  {
    accessorKey: 'price',
    header: 'Giá'
  },
  {
    accessorKey: 'color',
    header: 'Màu'
  },
  {
    accessorKey: 'quantity',
    header: 'Số lượng'
  },
  {
    accessorKey: 'total',
    header: 'Tổng'
  },
  {
    accessorKey: 'isPaid',
    header: 'Trạng thái'
  },
  {
    accessorKey: 'createdAt',
    header: 'Ngày tạo'
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original}></CellAction>
  }
];
