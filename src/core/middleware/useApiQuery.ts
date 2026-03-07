import {
  UseQueryResult,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query';
import ErrorClassifier from './ErrorClassifier';
import { ApiResponse } from './types';
import { getRequestClass } from './requestInstance';

const CACHE_TIME_MINUTES = 5;
const CACHE_TIME_MS = CACHE_TIME_MINUTES * 60 * 1000;

interface ApiQueryOptions<TData, TError = Error>
  extends Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'> {
  enableCache?: boolean;
}

function useApiQuery<TData = unknown, TError = Error>(
  url: string,
  params?: unknown,
  options: ApiQueryOptions<TData, TError> = {}
): UseQueryResult<TData, TError> {
  const { enableCache, ...queryOptions } = options;

  return useQuery<TData, TError>({
    queryKey: [url, params],
    queryFn: async (): Promise<TData> => {
      const response = await getRequestClass().post<ApiResponse<TData>>(url, params);
      return response.data.result as TData;
    },
    staleTime: enableCache ? CACHE_TIME_MS : undefined,
    refetchOnWindowFocus: false,
    retry: (failureCount, error) => {
      return ErrorClassifier.shouldRetry(error, failureCount);
    },
    retryDelay: (attemptIndex, error) => {
      return ErrorClassifier.getRetryDelay(error, attemptIndex);
    },
    ...queryOptions,
  });
}

export default useApiQuery;
