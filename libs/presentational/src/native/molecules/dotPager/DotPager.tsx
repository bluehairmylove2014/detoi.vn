import { COLOR_PALETTE } from '@present-native/styles';
import React from 'react';
import { View } from 'react-native';

export const DotPager = React.memo(
  ({
    numberDot,
    indexSelected,
  }: {
    numberDot: number;
    indexSelected: number;
  }) => {
    return (
      <React.Fragment>
        {Array.from({ length: numberDot }).map((_, indexDot) => (
          <View
            key={indexDot}
            style={{
              height: 15,
              width: 15,
              borderRadius: 99,
              backgroundColor:
                indexDot === indexSelected
                  ? COLOR_PALETTE.primary
                  : COLOR_PALETTE.black,
              opacity: indexDot === indexSelected ? 1 : 0.3,
            }}
          />
        ))}
      </React.Fragment>
    );
  }
);
