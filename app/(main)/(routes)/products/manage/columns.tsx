'use client';

import { ColumnDef } from '@tanstack/react-table';
import CellAction from './cell-action';

export type ProductColumn = {
  id: string;
  name: string;
  price: string;
  createdAt: string;
};

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: 'name',
    header: 'Tên sản phẩm'
  },
  {
    accessorKey: 'price',
    header: 'Giá'
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
