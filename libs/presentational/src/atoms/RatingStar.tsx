import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import Star from './Star';
import { IStar } from '@business-layer/services/entities';

type ratingStarStyle = 'shorten' | 'full';
type ratingStarProps = {
  point: number;
  style: ratingStarStyle;
  color?: string;
} & Pick<IStar, 'size'>;
function getRatingStarStyle({ style }: Pick<ratingStarProps, 'style'>) {
  switch (style) {
    case 'full':
      return 'flex flex-row justify-start items-center gap-2';
    case 'shorten':
      return '';
  }
}
function getStarFromPoint(point: number, color: string, size: SizeProp) {
  const star: JSX.Element[] = [];
  const rest = { color, size };
  for (let i = point; i >= 1; i--) {
    star.push(<Star type="faStarSolid" {...rest} key={i} />);
  }
  if (point - star.length >= 0.5) {
    star.push(<Star type="faStarHalfStroke" {...rest} key={star.length} />);
  }
  while (star.length < 5) {
    star.push(<Star type="faStarRegular" {...rest} key={star.length} />);
  }
  return star;
}
function RatingStar({ point, style, size, color = 'black' }: ratingStarProps) {
  return (
    <div className={getRatingStarStyle({ style })}>
      {getStarFromPoint(point, color, size)}
    </div>
  );
}

export default RatingStar;
