import { tableStyles } from './Table.styles';
import { TableCellProps } from './Table.type';
import { cn } from '@/utils';

export function TableCell({ children, className, ...props }: TableCellProps) {
  return (
    <td className={cn([tableStyles.cell.base, className])} {...props}>
      {children ?? '-'}
    </td>
  );
}
