import { View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { ChooseLocationProps } from '../../config';
import { BannerTopSection, LocationSearchBox } from '@present-native/molecules';
import {
  BlackUnderlineParagraph,
  SubtitleLink,
  WhiteParagraph,
  WhiteTitle,
  VerticalSpacer,
} from '@present-native/atoms';
import {
  RecommendationLocation,
  Header,
  ETypeDisplayHeader,
} from '@present-native/organisms';
import { useForwardGeocoding } from '@business-layer/business-logic/lib/geocode';
import { debouncePromise } from '@business-layer/business-logic/helper';
import {
  forwardGeocodingResponseType,
  TRecommendationGeo,
  ETypesRecommedationGeo,
} from '@business-layer/services';
import { chooseLocationScreenStyle } from './styles';
import CustomerTemplate from '@presentational/native/templates/CustomerTemplate';

const ChooseLocation = React.memo(
  ({ route, navigation }: ChooseLocationProps) => {
    const { category } = route.params;

    const [textSearchInputed, setTextSearchInputed] = useState('');
    const [dataRecommendationGeo, setDataRecommendationGeo] = useState<
      TRecommendationGeo[]
    >([]);

    const { onForwardGeocoding } = useForwardGeocoding();

    useEffect(() => {
      const delayDebounceFn = debouncePromise(onForwardGeocoding, 500);
      delayDebounceFn({ key: textSearchInputed })
        .then((itemsGeoResultSearching: forwardGeocodingResponseType) => {
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
          console.log({ error });
        });
    }, [textSearchInputed]);

    return (
      <CustomerTemplate>
        <View style={chooseLocationScreenStyle.container}>
          <BannerTopSection url={category?.image ?? '#'}>
            <Header typeDisplay={[ETypeDisplayHeader.BACK_BUTTON]} />
            <WhiteTitle theme="categoryName">
              {category?.name.toUpperCase()}
            </WhiteTitle>
            <VerticalSpacer size="l" />
            <WhiteParagraph theme="smallThin" align="center">
              {category?.description}
            </WhiteParagraph>
            <LocationSearchBox
              setTextSearchInputed={setTextSearchInputed}
              textSearchInputed={textSearchInputed}
            />
          </BannerTopSection>
          <View style={chooseLocationScreenStyle.bodyContainer}>
            <VerticalSpacer size="xxxl" />
            <RecommendationLocation
              dataRecommendationGeo={dataRecommendationGeo}
            />
            <VerticalSpacer size="xxxl" />
            <SubtitleLink screenName="Home" algin="center">
              <BlackUnderlineParagraph theme="smallMedium">
                Chọn từ sổ địa chỉ?
              </BlackUnderlineParagraph>
            </SubtitleLink>
          </View>
        </View>
      </CustomerTemplate>
    );
  }
);

export default ChooseLocation;
