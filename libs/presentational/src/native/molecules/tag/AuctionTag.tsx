import { Paragraph } from '@present-native/atoms';
import { COLOR_PALETTE } from '@present-native/styles';
import React from 'react';
import { View } from 'react-native';
import { TypeAuction } from '../card';

type AuctionTagProps = {
  typeTag: TypeAuction;
};

export const AuctionTag = React.memo(({ typeTag }: AuctionTagProps) => {
  if (typeTag === TypeAuction.REJECTED)
    return (
      <View style={{ backgroundColor: COLOR_PALETTE.rose, paddingHorizontal: 15, paddingVertical: 5,borderRadius: 5 }}>
        <Paragraph theme="smallBold" color="white">
          Sẽ xoá sau 24h
        </Paragraph>
      </View>
    );
  if (typeTag === TypeAuction.ABOUT_TO_EXPIRE)
    return (
      <View style={{ backgroundColor: COLOR_PALETTE.soft, paddingHorizontal: 15, paddingVertical: 5,borderRadius: 5 }}>
        <Paragraph theme="smallMedium" color="black">
          Sắp hết hạn
        </Paragraph>
      </View>
    );
  return <View/>;
});
