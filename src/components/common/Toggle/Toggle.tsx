import { toggleStyles } from './Toggle.styles';
import { cn } from '@/utils';
import type { ChangeEventHandler } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

type ToggleProps = {
  checked: boolean;
  leftLabel?: string;
  rightLabel?: string;
  name?: string;
  register?: Partial<UseFormRegisterReturn>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  darkMode?: boolean;
};

const Toggle = ({
  checked,
  leftLabel,
  rightLabel,
  name,
  register,
  onChange,
  disabled,
  darkMode = false,
}: ToggleProps) => (
  <div className={toggleStyles.wrapper}>
    {leftLabel && <label className={toggleStyles.label}>{leftLabel}</label>}
    <div
      className={cn([
        toggleStyles.container,
        darkMode ? toggleStyles.dark : toggleStyles.light,
        checked && !darkMode && toggleStyles.checkedLight,
      ])}
    >
      <input
        className={toggleStyles.input}
        id={name}
        name={name}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        {...register}
      />
      <span
        className={cn([
          toggleStyles.circle,
          checked ? toggleStyles.activeCircle : '',
          darkMode ? toggleStyles.darkCircle : toggleStyles.lightCircle,
        ])}
      />
    </div>
    {rightLabel && <label className={toggleStyles.label}>{rightLabel}</label>}
  </div>
);

export default Toggle;
