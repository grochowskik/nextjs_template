import { ReactNode } from 'react';
import { Accordion, LoaderSection } from '@/components';
import { cn } from '@/utils';
import { detailsStyles } from './Details.styles';

type DetailsSectionProps = {
  children: ReactNode;
  title?: string;
  cols?: 1 | 2 | 3 | 4;
  loading?: boolean;
  accordion?: boolean;
};

type DetailsFieldProps = {
  label: string;
  value?: string | number | null;
  className?: string;
};

const DetailsField = ({ label, value, className }: DetailsFieldProps) => {
  const {
    wrapper,
    label: labelClass,
    value: valueClass,
    empty,
  } = detailsStyles.field;

  if (!label) return null;

  return (
    <div className={cn([wrapper, className])}>
      <p className={labelClass}>{label}</p>
      {value ? (
        <div className={valueClass}>{value}</div>
      ) : (
        <div className={empty}>None</div>
      )}
    </div>
  );
};

function Details({
  children,
  title,
  cols = 4,
  loading = false,
  accordion = false,
}: DetailsSectionProps) {
  const { grid, section } = detailsStyles;

  const gridClass = grid.cols[cols];

  const content = (
    <LoaderSection loading={loading}>
      <div className={cn([grid.wrapper, gridClass])}>{children}</div>
    </LoaderSection>
  );

  if (accordion) {
    return <Accordion title={title}>{content}</Accordion>;
  }

  return (
    <div className={section.wrapper}>
      {title && <h3 className={section.title}>{title}</h3>}
      {content}
    </div>
  );
}

Details.Field = DetailsField;

export default Details;
