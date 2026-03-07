'use client';

import { Form, FormInput, FormSubmitButton } from '@/components';
import { useDashboardForm } from '../hooks/useDashboardForm';
import { DashboardModal } from './DashboardModal';

export function DashboardForm() {
  const { methods, onSubmit, isOpen, onClose } = useDashboardForm();

  return (
    <>
      <Form methods={methods} onSubmit={onSubmit}>
        <FormInput
          name="email"
          label="Adres Email"
          placeholder="jan@przyklad.pl"
          type="email"
          autoComplete="email"
        />
        <FormInput
          name="age"
          label="Wiek"
          placeholder="Np. 25"
          type="text"
          inputMode="numeric"
        />
        <FormSubmitButton
          label="Wyślij"
          variant="primary"
          disableIfInvalid
        />
      </Form>
      <DashboardModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}
