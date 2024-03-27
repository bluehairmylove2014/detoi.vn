import {
  FreelancerAccountDetailSchema,
  FreelancerPreviewSchema,
} from '@business-layer/services/entities';
import z from 'zod';

const getFreelancerPreviewDataResponseSchema = FreelancerPreviewSchema;
const getFreelancerDetailResponseSchema = FreelancerAccountDetailSchema;

export {
  getFreelancerPreviewDataResponseSchema,
  getFreelancerDetailResponseSchema,
};
