import { OrderContextProvider } from './ContextProvider';

export type orderProviderType = {
  children: React.ReactNode;
};
export const OrderProvider: React.FC<orderProviderType> = ({ children }) => {
  return <OrderContextProvider>{children}</OrderContextProvider>;
};
