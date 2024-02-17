import { HubConnection } from '@microsoft/signalr';

export interface RealtimeState {
  socket: HubConnection | null;
  message: string[];
}

export type RealtimeAction =
  | {
      type: 'SET_SOCKET';
      payload: RealtimeState['socket'];
    }
  | {
      type: 'SET_MESSAGE';
      payload: RealtimeState['message'];
    };

export type RealtimeContextType = {
  state: RealtimeState;
  dispatch: React.Dispatch<RealtimeAction>;
};
