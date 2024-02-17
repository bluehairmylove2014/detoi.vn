import { useMutation } from '@tanstack/react-query';
import { SirvService } from '@business-layer/services/lib';
import {
  uploadParamsType,
  uploadReturnType,
} from '@business-layer/services/lib';

const sirvService = new SirvService();

export const useUploadMutation = () => {
  return useMutation<uploadReturnType, Error, uploadParamsType, unknown>({
    mutationFn: sirvService.upload,
  });
};
