import { useApiQuery, useApiMutation } from '@/core';
import {
  CancelNoteRequest,
  CreateNoteRequest,
  Note,
  NoteListRequest,
  NoteListResponse,
  UpdateNoteRequest,
} from './types';

export const useNotesList = (params?: NoteListRequest) => {
  return useApiQuery<NoteListResponse>('/notes/list', params);
};

export const useCreateNote = () => {
  return useApiMutation<CreateNoteRequest, Note>('/notes/create', {
    invalidateQueriesList: ['/notes/list'],
  });
};

export const useUpdateNote = () => {
  return useApiMutation<UpdateNoteRequest, Note>('/notes/update', {
    invalidateQueriesList: ['/notes/list', '/notes/get'],
  });
};

export const useCancelNote = () => {
  return useApiMutation<CancelNoteRequest, Note>('/notes/cancel', {
    invalidateQueriesList: ['/notes/list', '/notes/get'],
  });
};
