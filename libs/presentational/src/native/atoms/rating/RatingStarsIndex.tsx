import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { FAIcon } from '../icon';
import { COLOR_PALETTE } from '@present-native/styles';
import { ratingStyle } from './styles';

type RatingStarsIndexProps = {
  ratingIndex: number;
  setRatingIndex: (index: number) => void;
  canRating?: boolean;
};

export const RatingStarsIndex = React.memo(
  ({
    ratingIndex,
    setRatingIndex,
    canRating = true,
  }: RatingStarsIndexProps) => {
    return (
      <View style={ratingStyle.startWrapper}>
        {Array.from({ length: ratingIndex }).map((item, index) => (
          <FAIcon iconName="faStar" color={COLOR_PALETTE.primary} size={22} />
        ))}
        {Array.from({ length: 5 - ratingIndex }).map((_, index) => (
          <TouchableOpacity
            disabled={!canRating}
            key={index}
            onPress={() => {
              setRatingIndex(index + ratingIndex + 1);
            }}
          >
            <FAIcon
              iconName="faStarEmptyStroke"
              color={COLOR_PALETTE.primary}
              size={22}
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  }
);
