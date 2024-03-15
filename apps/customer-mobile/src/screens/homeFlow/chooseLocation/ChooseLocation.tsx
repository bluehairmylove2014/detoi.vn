import { View } from 'react-native';
import React, { useState } from 'react';
import { ChooseLocationProps } from '../../../config';
import { BannerTopSection } from '@present-native/molecules';
import { Paragraph, SubtitleLink, VerticalSpacer } from '@present-native/atoms';
import { RecommendationLocation } from '@present-native/organisms';
import {
  useCurrentOrderAddress,
  useForwardGeocoding,
} from '@business-layer/business-logic/lib/geocode';
import { debounce } from '@business-layer/business-logic/helper';
import {
  recommendationGeoType,
  ETypesRecommedationGeo,
} from '@business-layer/services';
import { chooseLocationScreenStyle } from './styles';
import CustomerTemplate from '@presentational/native/templates/CustomerTemplate';
import { useCurrentOrderCategory } from '@business-layer/business-logic/lib/category';

const ChooseLocation = React.memo(
  ({ route, navigation }: ChooseLocationProps) => {
    const { currentOrderCategory: category } = useCurrentOrderCategory();
    const { setCurrentOrderAddress } = useCurrentOrderAddress();

    const [dataRecommendationGeo, setDataRecommendationGeo] = useState<
      recommendationGeoType[]
    >([]);

    const { onForwardGeocoding } = useForwardGeocoding();

    const handleSearchKeyChange = debounce((value: string) => {
      if (value.trim().length > 0) {
        onForwardGeocoding({ key: value })
          .then((itemsGeoResultSearching) => {
            setDataRecommendationGeo(
              itemsGeoResultSearching.map((itemGeoResultSearching) => {
                return {
                  ...itemGeoResultSearching,
                  typeRecommedationGeo: ETypesRecommedationGeo.RESULT_SEARCHING,
                };
              })
            );
          })
          .catch((error) => {
            setDataRecommendationGeo([]);
          });
      }
    }, 500);

    const handleSelectGeo = (geo: recommendationGeoType) => {
      setCurrentOrderAddress({ addressGeo: geo });
      navigation.navigate('ChooseService');
    };

    return (
      <CustomerTemplate>
        {category ? (
          <View style={chooseLocationScreenStyle.container}>
            <BannerTopSection
              url={category?.image ?? '#'}
              title={`DỊCH VỤ ${category?.name.toUpperCase()}`}
              subtitle={category?.description}
              enableSearchBox={true}
              searchBoxOnChange={handleSearchKeyChange}
            />
            <View style={chooseLocationScreenStyle.bodyContainer}>
              <VerticalSpacer size="xxxl" />
              <RecommendationLocation
                dataRecommendationGeo={dataRecommendationGeo}
                onPress={handleSelectGeo}
              />
              <VerticalSpacer size="xxxl" />
              <SubtitleLink screenName="Home">
                <Paragraph
                  theme="smallMedium"
                  decoration="underline"
                  align="center"
                >
                  Chọn từ sổ địa chỉ?
                </Paragraph>
              </SubtitleLink>
            </View>
          </View>
        ) : null}
      </CustomerTemplate>
    );
  }
);

export default ChooseLocation;
