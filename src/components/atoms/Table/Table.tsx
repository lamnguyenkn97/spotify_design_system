import React from 'react';
import {
  TableWrapper,
  TableHeader,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
} from './Table.style';

export interface TableProps<T> {
  data: T[];
  columns: {
    key: keyof T;
    label: string;
    width?: string; // Optional column width
    renderCell?: (item: T) => React.ReactNode; // Custom cell rendering
  }[];
}

export const Table = <T,>({ data, columns }: TableProps<T>) => {
  return (
    <TableWrapper>
      <TableHead>
        <tr>
          {columns.map((col) => (
            <TableHeader key={col.key as string} style={{ width: col.width }}>
              {col.label}
            </TableHeader>
          ))}
        </tr>
      </TableHead>
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {columns.map((col) => (
              <TableCell key={col.key as string}>
                {
                  col.renderCell
                    ? col.renderCell(row)
                    : (row[col.key] as React.ReactNode) // ✅ Type assertion to ReactNode
                }
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </TableWrapper>
  );
};
