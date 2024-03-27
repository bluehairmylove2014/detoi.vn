import { z } from 'zod';

export interface ISkill {
  id: string;
  name: string;
  description: string;
  skillCategory: string;
}

export const SkillSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  skillCategory: z.string(),
});
