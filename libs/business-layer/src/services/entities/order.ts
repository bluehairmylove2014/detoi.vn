import { AddressSchema, IAddress } from './address';
import { IService, IServiceStatus, ServiceSchema } from './service';
import { z } from 'zod';

export interface IOrderElement {
  name: string;
  dataType: string;
  value: string;
}
export const OrderElementSchema = z.object({
  name: z.string(),
  dataType: z.string(),
  value: z.string(),
});

export interface IPostOrderFixedContent {
  address: Omit<IAddress, 'id'>;
  startTime: string;
  startDate: string;
}
export const PostOrderFixedContentSchema = z.object({
  address: AddressSchema.omit({ id: true }),
  startTime: z.string(),
  startDate: z.string(),
});

export interface IPostOrderServiceContent {
  serviceTypeId: string;
  note: string;
  additionalNote: string;
  requirement: {
    key: string;
    value: string;
  }[];
  additionalRequirement: {
    key: string;
    value: string;
  }[];
}
export const PostOrderServiceContentSchema = z.object({
  serviceTypeId: z.string(),
  note: z.string(),
  additionalNote: z.string(),
  requirement: z.array(
    z.object({
      key: z.string(),
      value: z.string(),
    })
  ),
  additionalRequirement: z.array(
    z.object({
      key: z.string(),
      value: z.string(),
    })
  ),
});

export interface IOrderDetail {
  id: string;
  address: IAddress;
  estimatedPrice: number;
  startTime: string;
  startDate: string;
  finishTime: string | null;
  finishDate: string | null;
  freelancer: {
    id: string;
    fullName: string;
    avatar: string;
    rating: number;
  } | null;
  serviceStatus: string;
  serviceTypes: IService[];
  services: IPostOrderServiceContent & { id: string };
}
export const OrderDetailSchema = z.object({
  id: z.string(),
  address: AddressSchema,
  estimatedPrice: z.number().nullable(),
  startTime: z.string(),
  startDate: z.string(),
  finishTime: z.string().nullable(),
  finishDate: z.string().nullable(),
  freelancer: z
    .object({
      id: z.string(),
      fullName: z.string(),
      avatar: z.string(),
      rating: z.number(),
    })
    .nullable(),
  serviceStatus: z.string(),
  serviceTypes: z.array(ServiceSchema).nullable(),
});
