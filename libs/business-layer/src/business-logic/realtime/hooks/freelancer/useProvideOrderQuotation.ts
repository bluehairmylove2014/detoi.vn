import { FREELANCER_MSG_KEYS } from '../../config';
import { useRealtimeContext } from '../../context';
import { HubConnection } from '@microsoft/signalr';
import { IFreelancerAccountDetail } from '@business-layer/services/entities';

export function useProvideOrderQuotation() {
  const { state } = useRealtimeContext();

  const onProvideOrderQuotation = ({
    freelancerDetail,
    previewPrice,
  }: {
    freelancerDetail: IFreelancerAccountDetail;
    previewPrice: number;
  }): Promise<HubConnection> => {
    return new Promise((rs, rj) => {
      const socketConn = state.socket;
      if (!socketConn) {
        rj(new Error('Socket is not connected'));
        return;
      } else {
        socketConn
          .invoke(FREELANCER_MSG_KEYS.PROVIDE_QUOTATION, {
            ...freelancerDetail,
            previewPrice,
          })
          .then((message) => {
            console.log(message);
            rs(message);
          })
          .catch((error) => {
            rj(error);
          });
      }
    });
  };

  return {
    onProvideOrderQuotation,
  };
}
