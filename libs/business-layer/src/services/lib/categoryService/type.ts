import { ICategory } from '@business-layer/services/entities';

export type getAllCategoryParamsType = { token: string | null };
export type getAllCategoryResponseType = ICategory[];

export type getAllServicesOfCategoryParamsType = {
  token: string | null;
  categoryId: string;
};
export type getAllServicesOfCategoryResponseType = ICategory[];
