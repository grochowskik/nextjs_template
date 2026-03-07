import {
  useMutation,
  useQueryClient,
  UseMutationResult,
  UseMutationOptions,
  InvalidateQueryFilters,
  QueryKey,
} from '@tanstack/react-query';
import ErrorClassifier from './ErrorClassifier';
import { ApiResponse } from './types';
import { getRequestClass } from './requestInstance';

interface ApiMutationOptions<TRequest, TResponse, TError = unknown>
  extends Omit<UseMutationOptions<TResponse, TError, TRequest>, 'mutationFn'> {
  queryKey?: QueryKey;
  invalidateQueriesList?: InvalidateQueryFilters;
}

interface ApiMutationResult<TRequest, TResponse, TError = unknown>
  extends Omit<UseMutationResult<TResponse, TError, TRequest>, 'mutate'> {
  mutate: (variables: TRequest) => Promise<TResponse>;
  mutateSync: UseMutationResult<TResponse, TError, TRequest>['mutate'];
}

function useApiMutation<
  TRequest = unknown,
  TResponse = unknown,
  TError = unknown
>(
  url: string,
  options: ApiMutationOptions<TRequest, TResponse, TError> = {}
): ApiMutationResult<TRequest, TResponse, TError> {
  const queryClient = useQueryClient();

  const {
    queryKey,
    invalidateQueriesList,
    onSuccess,
    onError,
    ...mutationOptions
  } = options;

  const mutation = useMutation<TResponse, TError, TRequest>({
    mutationFn: async (params: TRequest): Promise<TResponse> => {
      const response = await getRequestClass().post<ApiResponse<TResponse>>(
        url,
        params
      );
      return response.data.result as TResponse;
    },
    onSuccess: (response, variables, context) => {
      if (queryKey) {
        queryClient.setQueryData(queryKey, response);
      }

      if (invalidateQueriesList) {
        queryClient.invalidateQueries(invalidateQueriesList);
      }

      if (onSuccess) {
        (
          onSuccess as (
            data: TResponse,
            variables: TRequest,
            context: unknown
          ) => void
        )(response, variables, context);
      }
    },
    onError: (error, variables, context) => {
      const classified = ErrorClassifier.classify(error);

      console.error('[Mutation Error]', {
        url,
        errorType: classified.type,
        shouldRetry: classified.shouldRetry,
        variables,
      });

      if (onError) {
        (
          onError as (
            error: TError,
            variables: TRequest,
            context: unknown
          ) => void
        )(error, variables, context);
      }
    },
    retry: (failureCount, error) => {
      return ErrorClassifier.shouldRetry(error, failureCount);
    },
    retryDelay: (attemptIndex, error) => {
      return ErrorClassifier.getRetryDelay(error, attemptIndex);
    },
    ...mutationOptions,
  });

  return {
    ...mutation,
    mutate: mutation.mutateAsync,
    mutateSync: mutation.mutate,
  };
}

export default useApiMutation;
