import {
  IAddress,
  IPostOrderFixedContent,
  IPostOrderServiceContent,
} from '@business-layer/services/entities';

export interface OrderState {
  postOrderAddress: IPostOrderFixedContent['address'] | null;
  postOrderStartDatetime: Omit<IPostOrderFixedContent, 'address'> | null;
  postOrderServiceContent: IPostOrderServiceContent | null;
}

export type OrderAction =
  | {
      type: 'SET_POST_ORDER_ADDRESS';
      payload: OrderState['postOrderAddress'];
    }
  | {
      type: 'SET_POST_ORDER_DATE_TIME_START';
      payload: OrderState['postOrderStartDatetime'];
    }
  | {
      type: 'SET_POST_ORDER_SERVICE_CONTENT';
      payload: OrderState['postOrderServiceContent'];
    };

export type OrderContextType = {
  state: OrderState;
  dispatch: React.Dispatch<OrderAction>;
};
