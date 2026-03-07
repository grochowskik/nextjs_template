'use client';

import { LoaderSection, Navbar } from '@/components';
import { pageStyles } from './page.styles';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

type PageProps = {
  children?: React.ReactNode;
  loading?: boolean;
};

const Page = ({ children, loading }: PageProps) => {
  const loggedIn = useSelector((state: RootState) => state.user.loggedIn);
  const { container } = pageStyles;

  return (
    <div className={container}>
      {loggedIn && <Navbar />}
      <LoaderSection loading={loading}>{children}</LoaderSection>
    </div>
  );
};

export default Page;
