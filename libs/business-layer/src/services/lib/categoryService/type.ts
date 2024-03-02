import { ICategory } from '@business-layer/services/entities';
import { IService } from '@business-layer/services/entities/service';

export type getAllCategoryPropsType = { token: string | null };
export type getAllCategoryResponseType = ICategory[];

export type getAllServicesOfCategoryPropsType = {
  token: string | null;
  categoryId: string;
};
export type getAllServicesOfCategoryResponseType = IService[];
