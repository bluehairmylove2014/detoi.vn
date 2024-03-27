import { IFreelancerAccountDetail, IFreelancerPreview } from '../../entities';

export type getFreelancerPreviewDataPropsType = {
  token: string | null;
};
export type getFreelancerPreviewDataResponseType = IFreelancerPreview;

export type getFreelancerDetailPropsType = {
  token: string | null;
};
export type getFreelancerDetailResponseType = IFreelancerAccountDetail;
