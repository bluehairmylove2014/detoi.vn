import { ICategory } from '@business-layer/services/entities';

export type getAllCategoryParamsType = { token: string | null };
export type getAllCategoryResponseType = ICategory[];
