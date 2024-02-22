import { useMemo } from 'react';
import { useAuthContext } from '../context';

export const useGetOnOtpPhoneNumber = (): string | null => {
  const { state } = useAuthContext();
  return useMemo(() => state.onOtpPhoneNumber, [state.onOtpPhoneNumber]);
};
