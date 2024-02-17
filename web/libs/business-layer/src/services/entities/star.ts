import { SizeProp } from '@fortawesome/fontawesome-svg-core';

export interface IStar {
  type: 'faStarSolid' | 'faStarHalfStroke' | 'faStarRegular';
  color: string;
  size: SizeProp;
}
