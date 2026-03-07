export const buttonStyles = {
  base: 'relative flex items-center justify-center w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1',

  variants: {
    primary:
      'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 shadow-sm shadow-indigo-200',
    secondary:
      'bg-surface text-text-muted border border-border hover:bg-surface-hover focus:ring-border',
    danger: 'bg-rose-600 text-white hover:bg-rose-700 focus:ring-rose-500',
  },

  disabledStyle: {
    primary: 'opacity-70 cursor-not-allowed bg-indigo-400 hover:bg-indigo-400',
    secondary: 'opacity-50 cursor-not-allowed bg-surface-subtle',
    danger: 'opacity-70 cursor-not-allowed bg-rose-400',
  },

  content: {
    visible: 'opacity-100 transition-opacity duration-200',
    hidden: 'opacity-0',
  },
} as const;
