import React from 'react';
import { TableProps } from './Table.types';
import {
  TableWrapper,
  TableHeader,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
} from './Table.style';

export const Table = <T,>({ data, columns, onRowClick, onRowHover }: TableProps<T>) => {
  const handleRowClick = (row: T, rowIndex: number) => {
    if (onRowClick) {
      onRowClick(row, rowIndex);
    }
  };

  const handleRowMouseEnter = (row: T, rowIndex: number) => {
    if (onRowHover) {
      onRowHover(row, rowIndex, true);
    }
  };

  const handleRowMouseLeave = (row: T, rowIndex: number) => {
    if (onRowHover) {
      onRowHover(row, rowIndex, false);
    }
  };

  return (
    <TableWrapper>
      <TableHead>
        <tr>
          {columns.map((col) => (
            <TableHeader 
              key={col.key as string} 
              style={{ width: col.width }}
              align={col.align}
            >
              {col.label}
            </TableHeader>
          ))}
        </tr>
      </TableHead>
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow 
            key={rowIndex}
            onClick={() => handleRowClick(row, rowIndex)}
            onMouseEnter={() => handleRowMouseEnter(row, rowIndex)}
            onMouseLeave={() => handleRowMouseLeave(row, rowIndex)}
            $clickable={!!onRowClick}
          >
            {columns.map((col) => (
              <TableCell 
                key={col.key as string}
                align={col.align}
              >
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
