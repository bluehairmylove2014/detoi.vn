import {
  PaginationProvider,
  paginationProviderType,
} from '../non-service-lib/pagination/provider';
import {
  RealtimeProvider,
  realtimeProviderType,
} from '../realtime/provider/RealtimeProvider';

export * from './socialConfig';

/**
 * CONFIG FOR AUTH MODULES
 */
export const authConfig = {
  isNeedRefreshToken: true,
};

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
export type moduleKeyList = 'pagination' | 'realtime';
export type providerList = React.FC<
  paginationProviderType | realtimeProviderType
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
];
