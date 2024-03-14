import {
  Paragraph,
  GrayDivider,
  FAIcon,
  VerticalSpacer,
} from '@present-native/atoms';
import { COLOR_PALETTE } from '@present-native/styles';
import React from 'react';
import { recommendationGeoType } from '@business-layer/services';
import { TouchableOpacity, View } from 'react-native';
import { IconGeo } from '@present-native/atoms/icon/IconGeo';
import { recommendationLocationStyle } from './styles';

const LIMIT_RESULT = 5;
export const RecommendationLocation = React.memo(
  ({
    dataRecommendationGeo,
    onPress,
  }: {
    dataRecommendationGeo: recommendationGeoType[];
    onPress: (geo: recommendationGeoType) => void;
  }) => {
    return (
      <React.Fragment>
        {dataRecommendationGeo.slice(0, LIMIT_RESULT).map((itemGeo, index) => {
          return (
            <TouchableOpacity
              style={recommendationLocationStyle.container}
              key={`${itemGeo}-${index}`}
              onPress={() => onPress(itemGeo)}
            >
              <View style={recommendationLocationStyle.wrapperItem}>
                <View style={recommendationLocationStyle.wrapperDisplayName}>
                  <View style={recommendationLocationStyle.wrapperIcon}>
                    <IconGeo typeGeo={itemGeo.typeRecommedationGeo} />
                  </View>
                  <Paragraph lineNumber={1} theme="smallMedium">
                    {itemGeo.display_name}
                  </Paragraph>
                </View>
                <FAIcon
                  iconName="faArrowRight"
                  color={COLOR_PALETTE.black}
                  size={18}
                />
              </View>
              <VerticalSpacer size="l" />
              <GrayDivider direction="horizontal" />
              <VerticalSpacer size="l" />
            </TouchableOpacity>
          );
        })}
      </React.Fragment>
    );
  }
);
