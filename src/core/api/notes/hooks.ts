import { useApiQuery, useApiMutation } from '@/core';
import {
  CreateNotesRequest,
  Notes,
  NotesListRequest,
  NotesListResponse,
  UpdateNotesRequest,
} from './types';

export const useNotesList = (
  params: NotesListRequest = {},
  options?: { enableCache?: boolean; refetchInterval?: number },
) => {
  return useApiQuery<NotesListResponse>('/notes/list', params, {
    enableCache: options?.enableCache ?? true,
    refetchInterval: options?.refetchInterval,
  });
};

export const useCreateNotes = () => {
  return useApiMutation<CreateNotesRequest, Notes>('/notes/create', {
    invalidateQueriesList: {
      queryKey: ['/notes/list'],
    },
  });
};

export const useUpdateNotes = () => {
  return useApiMutation<UpdateNotesRequest, Notes>('/notes/update', {
    invalidateQueriesList: {
      queryKey: ['/notes/list', '/notes/get'],
    },
  });
};

export const useCancelNotes = () => {
  return useApiMutation<{ notesId: string }, Notes>('/notes/cancel', {
    invalidateQueriesList: {
      queryKey: ['/notes/list', '/notes/get'],
    },
  });
};
