import { ICategory } from '@business-layer/services/entities';

export interface CategoryState {
  categories: ICategory[] | null;
}

export type CategoryAction = {
  type: 'SET_CATEGORIES';
  payload: CategoryState['categories'];
};

export type CategoryContextType = {
  state: CategoryState;
  dispatch: React.Dispatch<CategoryAction>;
};
