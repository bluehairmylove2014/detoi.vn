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
  [key: string]: string | boolean | number;
}
export const PostOrderServiceContentSchema = z.record(
  z.union([z.string(), z.boolean(), z.number()])
);

export interface IOrderDetail {
  address: IAddress;
  estimatedPrice: number | null;
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
}
export const OrderDetailSchema = z.object({
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
