import { useMutation } from '@tanstack/react-query';
import { FCaptchaService } from '@business-layer/services';
import { fCaptchaVerifySolutionResponseType } from '@business-layer/services/lib/friendlyCaptchaService/type';

const fcaptchaService = new FCaptchaService();

export const useVerifySolutionMutation = () => {
  return useMutation<
    fCaptchaVerifySolutionResponseType,
    Error,
    string,
    unknown
  >({
    mutationFn: fcaptchaService.verifySolution,
  });
};
