import { IAccountDetail } from '../../entities';

export type getAccountInfoResponseType = IAccountDetail;

export type accountInfoToModifyType = Pick<
  IAccountDetail,
  'fullName' | 'email' | 'dateOfBirth' | 'phone'
>;
export type modifyAccountInfoParamsType = {
  data: accountInfoToModifyType;
  token: string | null;
};
export type modifyAccountInfoResponseType = { message: string };

export type getAllAccountResponseType = IAccountDetail[];
export type unitModifyAccountParamsType = {
  data: IAccountDetail;
  token: string | null;
};
export type unitModifyAccountResponseType = { message: string };
