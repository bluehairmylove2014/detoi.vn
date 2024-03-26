import { Paragraph } from '@present-native/atoms';
import { COLOR_PALETTE, commonShadow } from '@present-native/styles';
import React, { useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

type TabListProps = {
  tabListContent: string[];
  indexSelectedTab: number;
  setIndexSelectedTab: (index: number) => void;
};

export const TabList = React.memo(
  ({ tabListContent, indexSelectedTab, setIndexSelectedTab }: TabListProps) => {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {tabListContent.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              commonShadow.around,
              {
                backgroundColor:
                  indexSelectedTab === index
                    ? COLOR_PALETTE.soft
                    : COLOR_PALETTE.white,
                paddingHorizontal: 15,
                paddingVertical: 5,
                borderRadius: 99,
                marginHorizontal: 5,
                marginVertical: 2,
              },
            ]}
            onPress={() => {
              setIndexSelectedTab(index);
            }}
          >
            <Paragraph theme={'smallRegular'} color="black">
              {item}
            </Paragraph>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
);
