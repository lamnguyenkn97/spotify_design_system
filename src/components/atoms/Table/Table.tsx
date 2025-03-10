import React from 'react';
import {
  StyledTable,
  StyledTh,
  StyledTd,
  StyledTr,
  StyledThead,
  StyledTbody,
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
    <StyledTable>
      <StyledThead>
        <tr>
          {columns.map((col) => (
            <StyledTh key={col.key as string} style={{ width: col.width }}>
              {col.label}
            </StyledTh>
          ))}
        </tr>
      </StyledThead>
      <StyledTbody>
        {data.map((row, rowIndex) => (
          <StyledTr key={rowIndex}>
            {columns.map((col) => (
              <StyledTd key={col.key as string}>
                {
                  col.renderCell
                    ? col.renderCell(row)
                    : (row[col.key] as React.ReactNode) // ✅ Type assertion to ReactNode
                }
              </StyledTd>
            ))}
          </StyledTr>
        ))}
      </StyledTbody>
    </StyledTable>
  );
};
