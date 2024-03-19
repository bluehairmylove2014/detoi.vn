import { View, Text } from 'react-native';
import React from 'react';
import { starAndReviewCountStyles } from './styles';
import { FAIcon } from '../icon';
import { COLOR_PALETTE } from '@present-native/styles';
import { Paragraph } from '../text';

const MAX_NUMBER_OF_STARS = 5;

function renderJSXStars(point: number) {
  const fullStars = Math.floor(point);
  const halfStars = point > fullStars ? 1 : 0;
  const emptyStars = MAX_NUMBER_OF_STARS - fullStars - halfStars;
  const starsList: JSX.Element[] = [];
  for (let i = 0; i < fullStars; i++) {
    starsList.push(
      <FAIcon
        iconName="faStar"
        color={COLOR_PALETTE.secondary}
        key={`fullStar@${i}`}
      />
    );
  }
  for (let i = 0; i < halfStars; i++) {
    starsList.push(
      <FAIcon
        iconName="faStarHalfStroke"
        color={COLOR_PALETTE.secondary}
        key={`halfStar@${i}`}
      />
    );
  }
  for (let i = 0; i < emptyStars; i++) {
    starsList.push(
      <FAIcon
        iconName="faStarEmptyStroke"
        color={COLOR_PALETTE.secondary}
        key={`emptyStar@${i}`}
      />
    );
  }
  return starsList;
}
function formatReviewCount(reviewCount: number) {
  if (reviewCount <= 99) {
    return reviewCount.toString();
  } else if (reviewCount >= 100 && reviewCount < 200) {
    return '99+';
  } else {
    const base = Math.pow(10, Math.floor(Math.log10(reviewCount))); // Lấy số mốc, ví dụ 240 => 100
    const formattedNumber = Math.floor(reviewCount / base) * base; // Làm tròn số về mốc, ví dụ 240 => 200
    return formattedNumber.toString() + '+';
  }
}

type ratingStarsProps = {
  point: number;
  reviewsCount?: number;
};
export const RatingStars: React.FC<ratingStarsProps> = ({
  point,
  reviewsCount,
}) => {
  return (
    <View style={starAndReviewCountStyles.container}>
      {renderJSXStars(point)}
      {reviewsCount ? (
        <Paragraph theme="smallSemibold" color="yellow">
          {formatReviewCount(reviewsCount)}
        </Paragraph>
      ) : (
        <></>
      )}
    </View>
  );
};
