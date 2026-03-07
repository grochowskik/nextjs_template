import {
  useMutation,
  useQueryClient,
  UseMutationResult,
} from '@tanstack/react-query';
import ErrorClassifier from './ErrorClassifier';
import { ApiResponse } from './types';
import { getRequestClass } from './requestInstance';

interface ApiMutationOptions<TRequest, TResponse> {
  invalidateQueriesList?: string[];
  onSuccess?: (data: TResponse, variables: TRequest) => void;
  onError?: (error: Error, variables: TRequest) => void;
}

interface ApiMutationResult<TRequest, TResponse> extends Omit<
  UseMutationResult<TResponse, Error, TRequest>,
  'mutate'
> {
  mutate: (variables: TRequest) => Promise<TResponse>;
  mutateSync: UseMutationResult<TResponse, Error, TRequest>['mutate'];
}

function useApiMutation<TRequest = unknown, TResponse = unknown>(
  url: string,
  options: ApiMutationOptions<TRequest, TResponse> = {},
): ApiMutationResult<TRequest, TResponse> {
  const queryClient = useQueryClient();
  const { invalidateQueriesList, onSuccess, onError } = options;

  const mutation = useMutation<TResponse, Error, TRequest>({
    mutationFn: async (params: TRequest): Promise<TResponse> => {
      const response = await getRequestClass().post<ApiResponse<TResponse>>(
        url,
        params,
      );
      return response.data.result as TResponse;
    },
    onSuccess: (data, variables) => {
      if (invalidateQueriesList) {
        invalidateQueriesList.forEach((key) =>
          queryClient.invalidateQueries({ queryKey: [key] }),
        );
      }
      onSuccess?.(data, variables);
    },
    onError: (error, variables) => {
      onError?.(error, variables);
    },
    retry: (failureCount, error) =>
      ErrorClassifier.shouldRetry(error, failureCount),
    retryDelay: (attemptIndex, error) =>
      ErrorClassifier.getRetryDelay(error, attemptIndex),
  });

  return {
    ...mutation,
    mutate: mutation.mutateAsync,
    mutateSync: mutation.mutate,
  };
}

export default useApiMutation;
