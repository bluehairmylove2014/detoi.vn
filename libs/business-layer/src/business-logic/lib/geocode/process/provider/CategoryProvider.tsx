import { GeocodeContextProvider } from './ContextProvider';

export type geocodeProviderType = {
  children: React.ReactNode;
};
export const GeocodeProvider: React.FC<geocodeProviderType> = ({
  children,
}) => {
  return <GeocodeContextProvider>{children}</GeocodeContextProvider>;
};
