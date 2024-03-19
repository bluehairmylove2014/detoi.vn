import { z } from 'zod';

export interface IEvent {
  title: string;
  subtitle: string;
  screenName: string;
  image: string;
}
export const EventSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  screenName: z.string(),
  image: z.string(),
});
