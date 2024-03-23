import { ActivityIndicator, View } from 'react-native';
import React, { useState } from 'react';
import { BannerTopSection } from '@present-native/molecules';
import { BaseLink, Paragraph, VerticalSpacer } from '@present-native/atoms';
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
import {
  useCurrentOrderCategory,
  useCurrentOrderService,
} from '@business-layer/business-logic/lib/category';
import { COLOR_PALETTE } from '@present-native/styles';
import { useSetPostOrderAddress } from '@business-layer/business-logic/lib/order';
import { useAuthNavigation } from '@business-layer/business-logic/non-service-lib/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { customerScreensList } from '@constants/customerScreens';

const ChooseLocation: React.FC<
  NativeStackScreenProps<customerScreensList, 'ChooseLocation'>
> = ({ route, navigation }) => {
  const { navigateToScreenInSameStack } = useAuthNavigation();
  const { currentOrderCategory: category } = useCurrentOrderCategory();
  const { currentOrderService: service } = useCurrentOrderService();
  const { setCurrentOrderAddress } = useCurrentOrderAddress();

  const [dataRecommendationGeo, setDataRecommendationGeo] = useState<
    recommendationGeoType[]
  >([]);
  const { onSetPostOrderAddress } = useSetPostOrderAddress();

  const { onForwardGeocoding, isLoading } = useForwardGeocoding();

  const handleSearchKeyChange = debounce((value: string) => {
    if (value.trim().length > 0) {
      setDataRecommendationGeo([]);
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
    onSetPostOrderAddress({
      addressData: {
        addressLine: geo.display_name,
        country: geo.country,
        district: geo.district,
        lat: geo.lat,
        lon: geo.lon,
        province: geo.province,
        ward: geo.ward,
      },
    });
    navigateToScreenInSameStack('ProvideDetail');
  };

  return (
    <CustomerTemplate>
      {category ? (
        <View style={chooseLocationScreenStyle.container}>
          <BannerTopSection
            url={service?.image ?? '#'}
            title={`DỊCH VỤ ${service?.name.toUpperCase()}`}
            subtitle={service?.description ?? ''}
            enableSearchBox={true}
            searchBoxOnChange={handleSearchKeyChange}
          />
          <View style={chooseLocationScreenStyle.bodyContainer}>
            <View style={chooseLocationScreenStyle.resultSearchLocationSection}>
              <VerticalSpacer size="xxxl" />
              <RecommendationLocation
                dataRecommendationGeo={dataRecommendationGeo}
                onPress={handleSelectGeo}
              />
              {isLoading ? (
                <ActivityIndicator
                  color={COLOR_PALETTE.primary}
                  size={'large'}
                />
              ) : null}
              <VerticalSpacer size="xxxl" />
            </View>
            <View style={chooseLocationScreenStyle.addressBookSection}>
              <BaseLink screen="Home">
                <Paragraph
                  theme="smallMedium"
                  decoration="underline"
                  align="center"
                >
                  Chọn từ sổ địa chỉ?
                </Paragraph>
              </BaseLink>
            </View>
          </View>
        </View>
      ) : null}
    </CustomerTemplate>
  );
};

export default ChooseLocation;
