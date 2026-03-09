export const toggleStyles = {
  wrapper: 'flex items-center',
  container:
    'flex items-center rounded-xl w-10 min-w-[40px] h-6 cursor-pointer',
  light:
    'bg-surface shadow-[inset_0px_0px_4px_-1px_rgba(0,0,0,0.8)] transition-colors duration-200',
  dark: 'bg-black/25 shadow-[inset_0px_0px_6px_-1px_rgba(0,0,0,0.9)]',
  checkedLight: 'bg-accent',
  circle: 'mx-[3px] h-4 w-4 rounded-full transition-[transform] duration-200',
  lightCircle: 'bg-white shadow-[0_0_0_1.5px_rgba(0,0,0,0.1)]',
  darkCircle: 'bg-black/75 shadow-[0px_0px_3px_0px_rgba(0,0,0,0.9)]',
  activeCircle: 'translate-x-[110%]',
  input: 'absolute opacity-0 pointer-events-none w-0 h-0',
  label: 'px-1',
} as const;
