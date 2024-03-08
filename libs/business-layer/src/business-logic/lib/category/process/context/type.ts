import { ICategory } from '@business-layer/services/entities';
import { IService } from '@business-layer/services/entities/service';

export interface CategoryState {
  categories: ICategory[] | null;
  currentOrderCategory: ICategory | null;
  currentOrderService: IService | null;
}

export type CategoryAction =
  | {
      type: 'SET_CATEGORIES';
      payload: CategoryState['categories'];
    }
  | {
      type: 'SET_CURRENT_ORDER_CATEGORY';
      payload: CategoryState['currentOrderCategory'];
    }
  | {
      type: 'SET_CURRENT_ORDER_SERVICE';
      payload: CategoryState['currentOrderService'];
    };

export type CategoryContextType = {
  state: CategoryState;
  dispatch: React.Dispatch<CategoryAction>;
};
