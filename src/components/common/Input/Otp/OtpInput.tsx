'use client';

import { Button } from '@/components';
import { otpInputStyles } from './OtpInput.styles';
import React, { useRef, useState } from 'react';
type OtpInputProps = {
  loading?: boolean;
  name?: string;
  length?: number;
  formName?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
};

function OtpInput({
  length = 6,
  name,
  loading,
  formName,
  disabled,
  onChange,
}: OtpInputProps) {
  const { wrapper, title, label, inputsContainer, input } = otpInputStyles;
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(''));
  const otpReference = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const value = e.target.value.slice(-1);

    if (!/^\d*$/.test(value)) return;

    const otpArr = [...otp];
    otpArr[index] = value;
    setOtp(otpArr);
    onChange?.(otpArr.join(''));

    if (value && index < length - 1) {
      otpReference.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    const target = e.target as HTMLInputElement;

    if (e.key === 'Backspace') {
      if (target.value === '') {
        if (index > 0) {
          const newOtp = [...otp];
          newOtp[index - 1] = '';
          setOtp(newOtp);
          onChange?.(newOtp.join(''));
          otpReference.current[index - 1]?.focus();
        }
      } else {
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
        onChange?.(newOtp.join(''));
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      otpReference.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < length - 1) {
      otpReference.current[index + 1]?.focus();
    } else if (e.key === 'Delete') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
      onChange?.(newOtp.join(''));
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').trim();

    if (!/^\d+$/.test(pastedData)) return;

    const pastedOtp = pastedData.slice(0, length).split('');
    const filledArray = pastedOtp.concat(
      Array(length - pastedOtp.length).fill(''),
    );

    setOtp(filledArray);
    onChange?.(filledArray.join(''));

    otpReference.current.forEach((field, index) => {
      if (field) field.value = filledArray[index];
    });

    const focusIndex = Math.min(pastedOtp.length, length - 1);
    otpReference.current[focusIndex]?.focus();
  };

  return (
    <div className={wrapper}>
      <div className={title}>OTP Verification</div>
      <label htmlFor={name} className={label}>
        Enter the code sent to your email
      </label>
      <div className={inputsContainer}>
        {otp.map((value, index) => (
          <input
            key={index}
            disabled={disabled}
            type="text"
            value={value}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            ref={(ref) => { otpReference.current[index] = ref; }}
            className={input}
            maxLength={1}
            name={name}
            form={formName}
            inputMode="numeric"
            autoComplete="one-time-code"
          />
        ))}
      </div>
      <Button loading={loading} type="submit" label="Next" />
    </div>
  );
}

export default OtpInput;
