import Star from './Star';
import { IStar } from '@business-layer/services/entities';

const DEFAULT_STAR_SIZE = '1rem';

type ratingStarProps = {
  point: number;
  style: 'shorten' | 'full';
} & Pick<IStar, 'size'>;
function getRatingStarStyle({ style }: Pick<ratingStarProps, 'style'>) {
  switch (style) {
    case 'full':
      return 'flex flex-row justify-start items-center gap-2';
    case 'shorten':
      return '';
  }
}
function getStarFromPoint(point: number, ...rest: any) {
  const star: JSX.Element[] = [];
  for (let i = point; i >= 1; i--) {
    star.push(<Star type="faStarSolid" {...rest} />);
  }
  if (point - star.length >= 0.5) {
    star.push(<Star type="faStarHalfStroke" {...rest} />);
  }
  while (star.length < 5) {
    star.push(<Star type="faStarRegular" {...rest} />);
  }
  return star;
}
function RatingStar({ point, style, size }: ratingStarProps) {
  return (
    <div className={getRatingStarStyle({ style })}>
      {getStarFromPoint(point, size ?? DEFAULT_STAR_SIZE)}
    </div>
  );
}

export default RatingStar;
