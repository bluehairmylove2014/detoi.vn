// 'use client';
import { AuthProvider, AuthProviderType } from '../lib/auth/process/provider';
import {
  PaginationProvider,
  paginationProviderType,
} from '../non-service-lib/pagination/process/provider/PaginationProvider';
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
  isNeedBroadcast: false,
};

/**
 * MUTATION CONFIG FOR REACT-QUERY
 */
export const mutationConfig = {
  MUTATION_RETRY: 0,
  USE_QUERY_RETRY: 1,
};

/**
 * If you add 1 more module to providerConfig, you must
 * add to moduleKeyList and providerList as well
 */
export type moduleKeyList = 'auth' | 'pagination' | 'realtime';
export type providerList = React.FC<
  AuthProviderType | paginationProviderType | realtimeProviderType
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
    key: 'auth',
    provider: AuthProvider,
  },
];
