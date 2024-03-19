import { AddressSchema, IAddress } from './address';
import { IServiceProven, ServiceProvenSchema } from './serviceProven';
import { ISkill, SkillSchema } from './skill';
import { z } from 'zod';

export interface IAccount {
  id: string;
  phone: string;
}
export const AccountSchema = z.object({
  id: z.string(),
  phone: z.string(),
});

export interface IAccountDetail {
  id: string;
  avatar: string;
  fullName: string;
  dateOfBirth?: string;
  phone: string;
  role: string;
}
export const AccountDetailSchema = z.object({
  id: z.string(),
  avatar: z.string(),
  fullName: z.string(),
  dateOfBirth: z.string().optional(),
  phone: z.string(),
  role: z.string(),
});

export interface ICustomerAccountDetail {
  accountId: string;
  account: IAccountDetail;
  address: IAddress[];
  customerRank: string;
  memberPoint: number;
}
export const CustomerAccountDetailSchema = z.object({
  accountId: z.string(),
  account: AccountDetailSchema,
  address: z.array(AddressSchema),
  customerRank: z.string(),
  memberPoint: z.number(),
});

export interface IFreelancerAccountDetail {
  accountId: string;
  account: IAccountDetail;
  address: IAddress;
  rating: number;
  totalReviewCount: number;
  balance: number;
  orderCount: number;
  loveCount: number;
  positiveReviewCount: number;
  identityNumber: string;
  isTeam: boolean;
  teamMemberCount: number;
  skills: ISkill[];
  description: string;
  serviceProven: IServiceProven[];
  previewPrice: number;
}
export const FreelancerAccountDetailSchema = z.object({
  accountId: z.string(),
  account: AccountDetailSchema,
  address: AddressSchema,
  rating: z.number(),
  totalReviewCount: z.number(),
  balance: z.number(),
  orderCount: z.number(),
  loveCount: z.number(),
  positiveReviewCount: z.number(),
  identityNumber: z.string(),
  isTeam: z.boolean(),
  teamMemberCount: z.number(),
  skills: z.array(SkillSchema),
  description: z.string(),
  serviceProven: z.array(ServiceProvenSchema),
  previewPrice: z.number(),
});
