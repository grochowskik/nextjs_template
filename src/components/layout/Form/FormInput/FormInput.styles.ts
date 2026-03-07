export const formStyles = {
  input: {
    container: 'flex flex-col gap-1.5 w-full relative',
    label: 'text-sm font-medium text-text-muted ml-1 cursor-pointer',
    inputWrapper: 'relative flex items-center',
    field: {
      base: 'w-full px-4 py-2.5 bg-surface border rounded-md text-sm text-text-default focus:outline-none placeholder:text-text-subtle disabled:bg-surface-subtle disabled:text-text-subtle',
      default:
        'border-border hover:border-text-subtle focus:border-accent focus:ring-4 focus:ring-accent/10 shadow-sm',
      error:
        'border-rose-500 text-rose-900 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 pr-10',
    },
    errorMessage: 'text-xs font-medium text-rose-500 mt-1 ml-1',
    errorIcon: 'absolute right-3 h-5 w-5 text-rose-500 pointer-events-none',
  },
} as const;
