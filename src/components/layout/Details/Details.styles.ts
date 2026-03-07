export const detailsStyles = {
  section: {
    title: 'text-lg font-bold mb-4',
    wrapper: 'w-full',
  },
  grid: {
    wrapper: 'grid gap-4 w-full',
    cols: {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-3',
      4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    } as Record<number, string>,
  },
  field: {
    wrapper: 'flex flex-col gap-1',
    label: 'text-sm text-text-subtle font-medium',
    value: 'text-base text-text-default',
    empty: 'text-base text-text-subtle italic',
  },
};
