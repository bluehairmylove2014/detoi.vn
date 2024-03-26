import React from 'react';
import { SuccessLoading } from '@present-native/atoms';
import { useAuthNavigation } from '@business-layer/business-logic/non-service-lib/navigation';

const ReceiveOrderSuccess = () => {
  const { navigateToScreenInDifferentStack, navigateToScreenInSameStack } =
    useAuthNavigation();
  return (
    <SuccessLoading
      title="Báo giá thành công"
      onComplete={() => {
        navigateToScreenInSameStack('Home');
      }}
    />
  );
};

export default ReceiveOrderSuccess;
