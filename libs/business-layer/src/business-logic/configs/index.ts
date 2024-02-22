import { AuthProvider, AuthProviderType } from '../lib/auth/process/provider';
import { categoryProviderType } from '../lib/category/process/provider';
import { CategoryContextProvider } from '../lib/category/process/provider/ContextProvider';
import {
  PaginationProvider,
  paginationProviderType,
} from '../non-service-lib/pagination/provider';
import {
  RealtimeProvider,
  realtimeProviderType,
} from '../realtime/provider/RealtimeProvider';

export * from './socialConfig';
export * from './constants';

/**
 * MUTATION CONFIG FOR REACT-QUERY
 */
export const mutationConfig = {
  MUTATION_RETRY: 1,
  USE_QUERY_RETRY: 1,
};

/**
 * If you add 1 more module to providerConfig, you must
 * add to moduleKeyList and providerList as well
 */
export type moduleKeyList = 'auth' | 'category' | 'pagination' | 'realtime';
export type providerList = React.FC<
  | AuthProviderType
  | categoryProviderType
  | paginationProviderType
  | realtimeProviderType
>;
export const providerConfig: {
  key: moduleKeyList;
  provider: providerList;
}[] = [
  {
    key: 'realtime',
    provider: RealtimeProvider,
  },
  {
    key: 'pagination',
    provider: PaginationProvider,
  },
  {
    key: 'category',
    provider: CategoryContextProvider,
  },
  {
    key: 'auth',
    provider: AuthProvider,
  },
];
