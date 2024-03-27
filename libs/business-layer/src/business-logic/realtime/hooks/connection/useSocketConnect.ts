import { getApiUrl } from '@business-layer/services/config/url';
import { useRealtimeContext } from '../../context';
import * as signalR from '@microsoft/signalr';
import { HubConnection } from '@microsoft/signalr';

export function useSocketConnect() {
  const { dispatch } = useRealtimeContext();

  const handleConnect = (phone?: string): Promise<HubConnection> => {
    return new Promise((rs, rj) => {
      console.log(
        'RUN SOCKET: ',
        `${getApiUrl()}/chat-hub${phone ? `?phone=${phone}` : ''}`
      );
      const socket = new signalR.HubConnectionBuilder()
        .withUrl(`${getApiUrl()}/chat-hub${phone ? `?phone=${phone}` : ''}`)
        .configureLogging(signalR.LogLevel.Information)
        .withAutomaticReconnect()
        .build();
      socket
        .start()
        .then((res) => {
          console.log('Connected to server');
          dispatch({
            type: 'SET_SOCKET',
            payload: socket,
          });
          rs(socket);
        })
        .catch((error) => {
          console.log('Cannot connect to server');
          console.error(error);
          rj(error);
        });
    });
  };

  return {
    handleConnect,
  };
}
