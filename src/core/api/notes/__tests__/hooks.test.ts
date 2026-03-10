import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import {
  useNotesList,
  useCreateNote,
  useUpdateNote,
  useCancelNote,
} from '../hooks';

vi.mock('@/core', () => ({
  useApiQuery: vi.fn(),
  useApiMutation: vi.fn(),
}));

import { useApiQuery, useApiMutation } from '@/core';

const mockQueryResult = { data: undefined, isLoading: false, isError: false };
const mockMutationResult = {
  mutate: vi.fn(),
  mutateSync: vi.fn(),
  isPending: false,
  isError: false,
};

beforeEach(() => {
  vi.mocked(useApiQuery).mockReturnValue(
    mockQueryResult as ReturnType<typeof useApiQuery>,
  );
  vi.mocked(useApiMutation).mockReturnValue(
    mockMutationResult as ReturnType<typeof useApiMutation>,
  );
});

describe('useNotesList', () => {
  it('calls useApiQuery with /notes/list and no params by default', () => {
    renderHook(() => useNotesList());
    expect(useApiQuery).toHaveBeenCalledWith('/notes/list', undefined);
  });

  it('forwards params to useApiQuery', () => {
    const params = { page: 2, limit: 10, status: 'pending' as const };
    renderHook(() => useNotesList(params));
    expect(useApiQuery).toHaveBeenCalledWith('/notes/list', params);
  });

  it('returns whatever useApiQuery returns', () => {
    const { result } = renderHook(() => useNotesList());
    expect(result.current).toBe(mockQueryResult);
  });
});

describe('useCreateNote', () => {
  it('calls useApiMutation with /notes/create', () => {
    renderHook(() => useCreateNote());
    expect(useApiMutation).toHaveBeenCalledWith(
      '/notes/create',
      expect.objectContaining({ invalidateQueriesList: ['/notes/list'] }),
    );
  });

  it('returns the mutation result', () => {
    const { result } = renderHook(() => useCreateNote());
    expect(result.current).toBe(mockMutationResult);
  });
});

describe('useUpdateNote', () => {
  it('calls useApiMutation with /notes/update and invalidates list + get', () => {
    renderHook(() => useUpdateNote());
    expect(useApiMutation).toHaveBeenCalledWith(
      '/notes/update',
      expect.objectContaining({
        invalidateQueriesList: expect.arrayContaining([
          '/notes/list',
          '/notes/get',
        ]),
      }),
    );
  });
});

describe('useCancelNote', () => {
  it('calls useApiMutation with /notes/cancel and invalidates list + get', () => {
    renderHook(() => useCancelNote());
    expect(useApiMutation).toHaveBeenCalledWith(
      '/notes/cancel',
      expect.objectContaining({
        invalidateQueriesList: expect.arrayContaining([
          '/notes/list',
          '/notes/get',
        ]),
      }),
    );
  });
});
