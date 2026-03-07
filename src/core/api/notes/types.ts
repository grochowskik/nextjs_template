export interface Notes {
  id: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed' | 'cancelled';
  type: 'deposit' | 'withdrawal' | 'transfer';
  createdAt: string;
  updatedAt: string;
  description?: string;
  metadata?: Record<string, unknown>;
}

export interface NotesListRequest {
  page?: number;
  limit?: number;
  status?: Notes['status'];
  type?: Notes['type'];
  startDate?: string;
  endDate?: string;
  sortBy?: 'createdAt' | 'amount' | 'status';
  sortOrder?: 'asc' | 'desc';
}

export interface NotesListResponse {
  notess: Notes[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export interface CreateNotesRequest {
  amount: number;
  currency: string;
  type: Notes['type'];
  description?: string;
  recipientId?: string;
  metadata?: Record<string, unknown>;
}

export interface UpdateNotesRequest {
  notesId: string;
  status?: Notes['status'];
  description?: string;
  metadata?: Record<string, unknown>;
}
