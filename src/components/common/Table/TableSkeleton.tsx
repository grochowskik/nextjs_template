import { tableStyles } from './Table.styles';
import { TableSkeletonProps } from './Table.type';
import { TableRow } from './TableRow';
import { TableCell } from './TableCell';

export function TableSkeleton({
  rows = 5,
  columns = 3,
}: TableSkeletonProps & { columns?: number }) {
  return (
    <>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <TableRow key={rowIndex}>
          {Array.from({ length: columns }).map((_, colIndex) => (
            <TableCell key={colIndex}>
              <div className={tableStyles.skeleton.bar} />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
}
