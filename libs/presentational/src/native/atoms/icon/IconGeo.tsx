import React from 'react';
import { ETypesRecommedationGeo } from '@business-layer/services';
import { FAIcon } from './FAIcon';
import { COLOR_PALETTE } from '@present-native/styles';

const DEFAULT_ICON_SIZE = 10;
export const IconGeo = React.memo(({ typeGeo }: { typeGeo: number }) => {
  if (typeGeo === ETypesRecommedationGeo.BOOK_MARK) {
    return (
      <FAIcon
        iconName="faArrowLeftLong"
        size={DEFAULT_ICON_SIZE}
        color={COLOR_PALETTE.primary}
      />
    );
  }
  if (typeGeo === ETypesRecommedationGeo.HISTORY) {
    return (
      <FAIcon
        iconName="faClockRotateLeft"
        size={DEFAULT_ICON_SIZE}
        color={COLOR_PALETTE.primary}
      />
    );
  }
  return (
    <FAIcon
      iconName="faLocationDot"
      size={DEFAULT_ICON_SIZE}
      color={COLOR_PALETTE.primary}
    />
  );
});
