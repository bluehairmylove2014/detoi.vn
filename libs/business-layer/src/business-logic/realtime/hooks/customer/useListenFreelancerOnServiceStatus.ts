import { CUSTOMER_MSG_KEYS } from '../../config';
import { useRealtimeContext } from '../../context';
import { HubConnection } from '@microsoft/signalr';

export function useListenFreelancerOnServiceStatus() {
  const { state } = useRealtimeContext();

  const onListenFreelancerOnServiceStatus = (): Promise<HubConnection> => {
    return new Promise((rs, rj) => {
      const socketConn = state.socket;
      if (!socketConn) {
        rj(new Error('Socket is not connected'));
        return;
      } else {
        socketConn.on(CUSTOMER_MSG_KEYS.UPDATE_ORDER_STATUS, (res) => {
          console.log(res);
          rs(res);
        });
      }
    });
  };

  return {
    onListenFreelancerOnServiceStatus,
  };
}
