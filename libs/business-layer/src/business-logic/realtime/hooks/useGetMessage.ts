import { useMemo } from 'react';
import { useRealtimeContext } from '../context';

function useGetMessage(): string[] {
  const { state } = useRealtimeContext();
  return useMemo(() => state.message, [state.message.length]);
}

export default useGetMessage;
