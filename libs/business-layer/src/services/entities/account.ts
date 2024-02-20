import { IAddress } from './address';
import { IServiceProven } from './serviceProven';
import { ISkill } from './skill';

export interface IAccount {
  id: number;
  phone?: string;
}
export interface IAccountDetail {
  id: number;
  avatar: string;
  fullName: string;
  dateOfBirth?: string;
  phone?: string;
  role: string;
}

export interface ICustomerAccountDetail extends IAccountDetail {
  accountId: number;
  address: IAddress[];
  customerRank: string;
  memberPoint: number;
}

export interface IFreelancerAccountDetail extends IAccountDetail {
  accountId: number;
  address: IAddress;
  rating: number;
  balance: number;
  orderCount: number;
  loveCount: number;
  positiveReviewCount: number;
  identityNumber: string;
  isTeam: boolean;
  skills: ISkill[];
  description: string;
  serviceProven: IServiceProven[];
}
