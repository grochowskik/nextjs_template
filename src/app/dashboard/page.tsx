'use client';

import { Page } from '@/components';
import { DashboardForm } from './components/DashboardForm';
import { DashboardAccordion } from './components/DashboardAccordion';
import { DashboardTable } from './components/DashboardTable';

export default function DashboardPage() {
  return (
    <Page>
      <DashboardTable />
      <DashboardAccordion />
      <DashboardForm />
    </Page>
  );
}
