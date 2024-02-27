import { IOrderElement } from '../../entities';

export type serviceBookingPropsType = {
  order: IOrderElement[];
  token: string | null;
};
export type serviceBookingResponseType = {
  message: string;
};
