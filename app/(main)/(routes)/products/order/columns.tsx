'use client';

import { ColumnDef } from '@tanstack/react-table';
import CellAction from './cell-action';
import CellActionStatus from './cell-action-status';

export type OrderColumn = {
  id: string;
  name: string;
  price: string;
  color: string;
  total: number;
  isPaid: boolean;
  status: string;
  quantity: number;
  info: string;
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
    accessorKey: 'info',
    header: 'Thông tin'
  },
  {
    accessorKey: 'total',
    header: 'Tổng'
  },
  {
    header: 'Trạng thái',
    id: 'status',
    cell: ({ row }) => <CellActionStatus data={row.original}></CellActionStatus>
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
