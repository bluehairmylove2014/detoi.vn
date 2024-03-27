import { CUSTOMER_MSG_KEYS } from '../../config';
import { useRealtimeContext } from '../../context';
import { HubConnection } from '@microsoft/signalr';
import { useSocketConnect } from '../connection';

export function useListenMatching() {
  const { state } = useRealtimeContext();
  const { handleConnect } = useSocketConnect();

  const onListenMatching = (): Promise<HubConnection> => {
    return new Promise((rs, rj) => {
      const socketConn = state.socket;
      if (!socketConn) {
        rj(new Error('Socket is not connected'));
        handleConnect() // try to reconnect
          .then((socket) => {
            socket.on(CUSTOMER_MSG_KEYS.LISTEN_MATCHING, (response) => {
              console.log(response);
              rs(response);
            });
          })
          .catch((err) => rj(err));
        return;
      } else {
        socketConn.on(CUSTOMER_MSG_KEYS.LISTEN_MATCHING, (response) => {
          console.log(response);
          rs(response);
        });
      }
    });
  };

  return {
    onListenMatching,
  };
}
