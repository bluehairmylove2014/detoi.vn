// Import necessary modules and functions
import { useVerifySolutionMutation } from '../../fetching/mutation';

type useVerifySolutionReturnType = {
  onVerifySolution: (solution: string) => Promise<string>;
  isLoading: boolean;
};
export const useVerifySolution = (): useVerifySolutionReturnType => {
  const verifySolutionMutation = useVerifySolutionMutation();

  const onVerifySolution = (solution: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      verifySolutionMutation
        .mutateAsync(solution)
        .then((data) => {
          if (data.success) {
            resolve('Xác thực thành công!');
          } else {
            reject(new Error('Xác thực thất bại! Xin hãy thử lại...'));
          }
        })
        .catch((error) => reject(error));
    });
  };

  return {
    onVerifySolution,
    isLoading: verifySolutionMutation.isPending,
  };
};
