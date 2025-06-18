import React from 'react';

export interface TableProps<T> {
  data: T[];
  columns: {
    key: keyof T;
    label: string;
    width?: string; // Optional column width
    renderCell?: (item: T) => React.ReactNode; // Custom cell rendering
  }[];
}
