import { tableStyles } from './Table.styles';
import { TableHeaderCellProps } from './Table.type';
import { cn } from '@/utils';

export function TableHeaderCell({
  children,
  className,
  width,
  ...props
}: TableHeaderCellProps) {
  return (
    <th
      className={cn([tableStyles.headerCell.base, className])}
      style={{ width }}
      {...props}
    >
      {children}
    </th>
  );
}
