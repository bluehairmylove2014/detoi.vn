import { AuthProvider, AuthProviderType } from '../lib/auth/process/provider';
import {
  CategoryProvider,
  categoryProviderType,
} from '../lib/category/process/provider';
import {
  GeocodeProvider,
  geocodeProviderType,
} from '../lib/geocode/process/provider';
import {
  OrderProvider,
  orderProviderType,
} from '../lib/order/process/provider';
import {
  BlurThemeProvider,
  blurThemeProviderType,
} from '../non-service-lib/blurTheme/provider/BlurThemeProvider';
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
export type moduleKeyList =
  | 'auth'
  | 'category'
  | 'geocode'
  | 'pagination'
  | 'realtime'
  | 'blurTheme'
  | 'order'
  | 'realtime';
export type providerList = React.FC<
  | AuthProviderType
  | categoryProviderType
  | paginationProviderType
  | realtimeProviderType
  | geocodeProviderType
  | blurThemeProviderType
  | orderProviderType
  | realtimeProviderType
>;
export const providerConfig: {
  key: moduleKeyList;
  provider: providerList;
}[] = [
  {
    key: 'order',
    provider: OrderProvider,
  },
  {
    key: 'blurTheme',
    provider: BlurThemeProvider,
  },
  {
    key: 'realtime',
    provider: RealtimeProvider,
  },
  {
    key: 'pagination',
    provider: PaginationProvider,
  },
  {
    key: 'geocode',
    provider: GeocodeProvider,
  },
  {
    key: 'category',
    provider: CategoryProvider,
  },
  {
    key: 'realtime',
    provider: RealtimeProvider,
  },
  {
    key: 'auth',
    provider: AuthProvider,
  },
  {
    key: 'blurTheme',
    provider: BlurThemeProvider,
  },
];
