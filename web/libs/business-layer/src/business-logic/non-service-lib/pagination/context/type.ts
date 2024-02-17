import { IPagination } from '@business-layer/services/entities';
export interface PaginationState {
  data: IPagination;
}

export type PaginationAction =
  | {
    type: 'SET_PAGINATION_DATA';
    payload: IPagination;
  }
  | {
    type: 'SET_CURRENT_PAGE';
    payload: number;
  };

export type PaginationContextType = {
  state: PaginationState;
  dispatch: React.Dispatch<PaginationAction>;
};
