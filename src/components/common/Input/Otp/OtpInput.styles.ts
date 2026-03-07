export const otpInputStyles = {
  wrapper: 'grid w-max text-2xl bg-surface-subtle rounded-lg shadow p-8',
  title: 'px-3 pb-10',
  label: 'text-xs leading-4 w-fit self-center px-3',
  inputsContainer: 'flex justify-center gap-2.5 my-2',
  input:
    'rounded-md bg-transparent border-2 border-border focus:outline-none text-base h-12 w-10 text-center hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50',
} as const;
