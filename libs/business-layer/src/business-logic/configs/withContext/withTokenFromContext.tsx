/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import { AuthContext } from '../../lib/auth/process/context/authContext';

type WrappedComponentProps = {
  children: React.ReactNode;
  accessToken: string | null;
};
type WithTokenFromContextProps = {
  children: React.ReactNode;
};
export const withTokenFromContext = (
  WrappedComponent: React.FC<WrappedComponentProps>
) => {
  const EnhancedComponent: React.FC<WithTokenFromContextProps> = (props) => {
    const {
      state: { token },
    } = useContext(AuthContext);

    return React.useMemo(
      () => <WrappedComponent {...props} accessToken={token ?? null} />,
      [token, props]
    );
  };

  return EnhancedComponent;
};
