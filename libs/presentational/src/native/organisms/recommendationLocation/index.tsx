import {
  BlackLimitLineParagraph,
  GrayDivider,
  FAIcon,
  VerticalSpacer,
} from '@present-native/atoms';
import { colors } from '@present-native/styles';
import React from 'react';
import { TRecommendationGeo } from '@business-layer/services';
import { TouchableOpacity, View } from 'react-native';
import { IconGeo } from '@present-native/atoms/icon/IconGeo';
import { recommendationLocationStyle } from './styles';

const LIMIT_RESULT = 5;
export const RecommendationLocation = React.memo(
  ({
    dataRecommendationGeo,
  }: {
    dataRecommendationGeo: TRecommendationGeo[];
  }) => {
    return (
      <React.Fragment>
        {dataRecommendationGeo.slice(0, LIMIT_RESULT).map((itemGeo, index) => {
          return (
            <View
              style={recommendationLocationStyle.container}
              key={`${itemGeo}-${index}`}
            >
              <TouchableOpacity style={recommendationLocationStyle.wrapperItem}>
                <View style={recommendationLocationStyle.wrapperIcon}>
                  <IconGeo typeGeo={itemGeo.typeRecommedationGeo} />
                </View>
                <View style={recommendationLocationStyle.wrapperDisplayName}>
                  <BlackLimitLineParagraph numberLine={1} theme="smallMedium">
                    {itemGeo.display_name}
                  </BlackLimitLineParagraph>
                </View>
                <FAIcon
                  iconName="faArrowRight"
                  color={colors.black}
                  size={18}
                />
              </TouchableOpacity>
              <VerticalSpacer size="l" />
              <GrayDivider direction="horizontal" />
              <VerticalSpacer size="l" />
            </View>
          );
        })}
      </React.Fragment>
    );
  }
);
