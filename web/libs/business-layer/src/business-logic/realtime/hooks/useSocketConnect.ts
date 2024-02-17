import { MSG_KEYS, baseSocketUrl } from '../config';
import { useRealtimeContext } from '../context';
import * as signalR from '@microsoft/signalr';
import { HubConnection } from '@microsoft/signalr';

export function useSocketConnect() {
  const { state, dispatch } = useRealtimeContext();

  const handleConnect = (email?: string): Promise<HubConnection> => {
    return new Promise((rs, rj) => {
      console.log('RUN SOCKET');
      const socket = new signalR.HubConnectionBuilder()
        .withUrl(`${baseSocketUrl}${email ? `?email=${email}` : ''}`)
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
          console.log('Cannot to server');
          console.error(error);
          rj(error);
        });

      socket.on(MSG_KEYS.ON_RECEIVE_MESSAGE, (message) => {
        console.log('NEW MESSAGE: ', message);
        dispatch({
          type: 'SET_MESSAGE',
          payload: [...state.message, message],
        });
      });

      // console.log(`${baseSocketUrl}${email ? `?email=${email}` : ''}`);
      // const socket = connect(
      //   `${baseSocketUrl}${email ? `?email=${email}` : ''}`
      // );
      // socket.on('connect', () => {
      //   console.log('Connected to server');
      //   dispatch({
      //     type: 'SET_SOCKET',
      //     payload: socket,
      //   });
      //   rs(socket);
      // });
      // socket.on(MSG_KEYS.ON_RECEIVE_MESSAGE, (data) => {
      //   console.log('Received message from server:', data);
      // });
      // socket.on('disconnect', () => {
      //   console.log('Disconnected from server');
      //   // You can handle disconnect scenarios here if needed
      // });
      // // Xử lý sự kiện lỗi
      // socket.on('error', (error) => {
      //   console.error('Socket connection error:', error);
      //   rj(error); // Reject promise with the error
      // });
    });
  };

  return {
    handleConnect,
  };
}
