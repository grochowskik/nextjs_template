import { toastError } from '@/hooks/useError';
import type { AxiosError } from 'axios';

const responseErrorHandler = async (error: AxiosError): Promise<void> => {
  toastError(error);
};

export default responseErrorHandler;
