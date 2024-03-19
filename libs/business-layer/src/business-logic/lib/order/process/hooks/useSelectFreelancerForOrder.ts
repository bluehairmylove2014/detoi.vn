import { useSelectFreelancerForOrderMutation } from '../../fetching/mutations';
import { useAuthContext } from '@business-layer/business-logic/lib/auth/process/context';

type useSelectFreelancerForOrderReturnType = {
  onSelectFreelancerForOrder: (
    orderId: string,
    freelancerId: string,
    actualPrice: number
  ) => Promise<string>;
  isLoading: boolean;
};
export const useSelectFreelancerForOrder =
  (): useSelectFreelancerForOrderReturnType => {
    const selectFreelancerForOrderMutation =
      useSelectFreelancerForOrderMutation();
    const {
      state: { token },
    } = useAuthContext();

    function onSelectFreelancerForOrder(
      orderId: string,
      freelancerId: string,
      actualPrice: number
    ): Promise<string> {
      return new Promise((resolve, reject) => {
        selectFreelancerForOrderMutation
          .mutateAsync({
            orderId,
            freelancerId,
            actualPrice,
            token,
          })
          .then((res) => {
            resolve(res.message);
          })
          .catch((error) => {
            console.error(error);
            reject(Error('Failed to Select Freelancer'));
          });
      });
    }
    return {
      onSelectFreelancerForOrder,
      isLoading: selectFreelancerForOrderMutation.isPending,
    };
  };
