import Image from 'next/image';
import { MouseEventHandler } from 'react';
import { cn } from '@/utils';
import { iconStyles } from './Icon.styles';

export type IconName = 'loader' | 'expand' | 'cross';

type iconProps = {
  iconName: IconName;
  height?: number;
  width?: number;
  pointer?: boolean;
  onClick?: MouseEventHandler<HTMLImageElement>;
  className?: string;
};

const Icon = ({
  iconName,
  height = 20,
  width = 20,
  pointer = false,
  onClick,
  className,
}: iconProps) => {
  const { base, point } = iconStyles;
  return (
    <Image
      alt={`${iconName}-icon`}
      src={`/assets/icons/${iconName}.svg`}
      height={height}
      width={width}
      onClick={onClick}
      className={cn([base, className, pointer && point])}
    />
  );
};

export default Icon;
