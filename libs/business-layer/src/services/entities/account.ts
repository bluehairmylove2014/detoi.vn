import { IAddress } from './address';
import { IServiceProven } from './serviceProven';
import { ISkill } from './skill';

export interface IAccount {
  id: string;
  phone: string;
}
export interface IAccountDetail {
  id: string;
  avatar: string;
  fullName: string;
  dateOfBirth?: string;
  phone?: string;
  role: string;
}

export interface ICustomerAccountDetail {
  accountId: string;
  account: IAccountDetail;
  address: IAddress[];
  customerRank: string;
  memberPoint: number;
}

export interface IFreelancerAccountDetail {
  accountId: string;
  account: IAccountDetail;
  address: IAddress;
  rating: number;
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
}
