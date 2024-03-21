import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/UI/table';
import { Button } from './button';

export const AppTable = () => {
  return (
    <Table>
      <TableHeader className='text-xl'>
        <TableRow>
          <TableHead className='w-full'>Наименование деятельности</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className='text-lg'>
          <TableCell className='font-medium'>Название модуля</TableCell>
          <TableCell>
            <Button variant={'secondary'}>Посмотреть</Button>
          </TableCell>
          <TableCell>
            <Button variant={'secondary'}>Редактировать</Button>
          </TableCell>
          <TableCell className='text-right'>
            <Button variant={'secondary'}>Удалить</Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
