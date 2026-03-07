'use client';

import React from 'react';
import {
  FormProvider,
  UseFormReturn,
  FieldValues,
  SubmitHandler,
} from 'react-hook-form';
import { formStyles } from './Form.styles';

interface FormProps<T extends FieldValues> {
  methods: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

function Form<T extends FieldValues>({
  methods,
  onSubmit,
  children,
  className = '',
  id,
}: FormProps<T>) {
  return (
    <FormProvider {...methods}>
      <form
        id={id}
        onSubmit={methods.handleSubmit(onSubmit)}
        className={`${formStyles.form} ${className}`}
        noValidate
      >
        {children}
      </form>
    </FormProvider>
  );
}

export default Form;
