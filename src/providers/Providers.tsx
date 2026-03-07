'use client';

import { ToastContainer } from 'react-toastify';
import { QueryProvider } from './QueryProvider';
import { ReduxProvider } from './ReduxProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <QueryProvider>
        {children}
        <ToastContainer />
      </QueryProvider>
    </ReduxProvider>
  );
}
