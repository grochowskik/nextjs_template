import { UseQueryResult, useQuery } from '@tanstack/react-query';
import ErrorClassifier from './ErrorClassifier';
import { ApiResponse } from './types';
import { getRequestClass } from './requestInstance';

const CACHE_TIME = 5 * 60 * 1000;

interface ApiQueryOptions {
  enabled?: boolean;
}
function useApiQuery<TData = unknown, TParams = unknown>(
  url: string,
  params?: TParams,
  options: ApiQueryOptions = {},
): UseQueryResult<TData, Error> {
  return useQuery<TData, Error>({
    queryKey: [url, params],
    queryFn: async (): Promise<TData> => {
      const response = await getRequestClass().post<ApiResponse<TData>>(
        url,
        params,
      );
      return response.data.result as TData;
    },
    staleTime: CACHE_TIME,
    gcTime: CACHE_TIME,
    refetchOnWindowFocus: false,
    retry: (failureCount, error) =>
      ErrorClassifier.shouldRetry(error, failureCount),
    retryDelay: (attemptIndex, error) =>
      ErrorClassifier.getRetryDelay(error, attemptIndex),
    ...options,
  });
}

export default useApiQuery;
