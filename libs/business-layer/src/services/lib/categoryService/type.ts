import { ICategory, ICategoryDetail } from '@business-layer/services/entities';
import { IService } from '@business-layer/services/entities/service';

export type getAllCategoryPropsType = { token: string | null };
export type getAllCategoryResponseType = ICategory[];

export type getCategoryDetailPropsType = {
  token: string | null;
  categoryId: string;
};
export type getCategoryDetailResponseType = ICategoryDetail;
