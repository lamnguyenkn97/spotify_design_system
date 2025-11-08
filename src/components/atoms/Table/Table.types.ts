import React from 'react';

export interface TableProps<T> {
  data: T[];
  columns: {
    key: keyof T;
    label: string | React.ReactNode; // Header label - can be text or icon
    width?: string; // Optional column width
    align?: 'left' | 'right' | 'center'; // Text alignment
    renderCell?: (item: T) => React.ReactNode; // Custom cell rendering
  }[];
  onRowClick?: (row: T, rowIndex: number) => void; // Callback when a row is clicked
  onRowHover?: (row: T, rowIndex: number, isHovering: boolean) => void; // Callback when row hover state changes
}
