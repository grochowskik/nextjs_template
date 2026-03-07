import { tableStyles } from './Table.styles';
import { TableRowProps } from './Table.type';
import { cn } from '@/utils';

export function TableRow({ children, className, ...props }: TableRowProps) {
  return (
    <tr className={cn([tableStyles.row.base, className])} {...props}>
      {children}
    </tr>
  );
}
