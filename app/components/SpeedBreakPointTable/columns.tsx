'use client'

import { ColumnDef } from '@tanstack/react-table'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type SpeedBreakPointsProps = {
  id: string
  name: string
  friction: number
} & Record<`floor_${number}`, number>

export const columns: ColumnDef<SpeedBreakPointsProps>[] = [
  {
    accessorKey: 'name',
    header: 'Floor name',
  },
  {
    accessorKey: 'friction',
    header: 'Friction',
  },
  {
    accessorKey: 'floor_1',
    header: '#1',
  },
  {
    accessorKey: 'floor_2',
    header: '#3',
  },
  {
    accessorKey: 'floor_4',
    header: '#4',
  },
  {
    accessorKey: 'floor_5',
    header: '#5',
  },
  {
    accessorKey: 'floor_6',
    header: '#6',
  },
  {
    accessorKey: 'floor_7',
    header: '#7',
  },
  {
    accessorKey: 'floor_8',
    header: '#8',
  },
  {
    accessorKey: 'floor_9',
    header: '#9',
  },
  {
    accessorKey: 'floor_10',
    header: '#10',
  },
  {
    accessorKey: 'floor_11',
    header: '#11',
  },
  {
    accessorKey: 'floor_12',
    header: '#12',
  },
  {
    accessorKey: 'floor_13',
    header: '#13',
  },
  {
    accessorKey: 'floor_14',
    header: '#14',
  },
  {
    accessorKey: 'floor_15',
    header: '#15',
  },
  {
    accessorKey: 'floor_16',
    header: '#16',
  },
  {
    accessorKey: 'floor_17',
    header: '#17',
  },
]
