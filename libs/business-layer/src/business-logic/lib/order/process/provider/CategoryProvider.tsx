import { CategoryContextProvider } from './ContextProvider';

export type categoryProviderType = {
  children: React.ReactNode;
};
export const CategoryProvider: React.FC<categoryProviderType> = ({
  children,
}) => {
  return <CategoryContextProvider>{children}</CategoryContextProvider>;
};
