export type Nav = {
  name: string;
  href: string;
};

export const navigation: Nav[] = [
  { name: 'Lists', href: '/lists' },
  { name: 'Tasks', href: '/tasks' },
  { name: 'Today', href: '/today' },
  { name: 'Upcoming', href: '/upcoming' },
];
