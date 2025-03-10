export interface DividerProps {
  thickness?: number;
  color?: string;
  margin?: string;
  variant?: 'solid' | 'dashed' | 'dotted' | 'double';
  vertical?: boolean;
  height?: string; // For vertical divider
}
