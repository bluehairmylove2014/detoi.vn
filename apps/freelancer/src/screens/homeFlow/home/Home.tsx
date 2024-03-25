/* eslint-disable @typescript-eslint/no-unused-vars */
import { ActivityIndicator, Switch, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { freelancerScreensList } from '@constants/freelancerScreens';
import { homeScreenStyle } from './styles';
import { useAuthNavigation } from '@business-layer/business-logic/non-service-lib/navigation';
import {
  FreelancerCardOrderList,
  FreelancerHeader,
} from '@present-native/organisms';
import FreelancerTemplate from '@present-native/templates/FreelancerTemplate';
import {
  BaseLink,
  FAIcon,
  HorizontalSpacer,
  InfiniteProgressBar,
  Paragraph,
  PrimaryBtn,
  PrimaryScrollView,
  SecondaryBtn,
  Title,
  VerticalSpacer,
} from '@present-native/atoms';
import {
  COLOR_PALETTE,
  commonShadow,
  screenHorizontalPadding,
} from '@present-native/styles';
import { ORDER_MARKETPLACE_SORT_CRITERIA } from '@constants/orderMarketplaceSortCriteria';
import EmptyBoxWithLabel from '@present-native/molecules/empty/EmptyBoxWithLabel';

const Home: React.FC<NativeStackScreenProps<freelancerScreensList, 'Home'>> = ({
  route,
  navigation,
}) => {
  const { navigateToScreenInSameStack } = useAuthNavigation();
  const [currentMarketplaceSortCriteria, setCurrentMarketplaceSortCriteria] =
    useState(ORDER_MARKETPLACE_SORT_CRITERIA[0]);
  const [marketplaceOrders, setMarketplaceOrders] = useState<[] | undefined>(
    undefined
  );

  function handleChangeSortCriteria(criteria: { id: string; name: string }) {
    setCurrentMarketplaceSortCriteria(criteria);
  }

  useEffect(() => {
    setTimeout(() => {
      setMarketplaceOrders([]);
    }, 5000);
  }, []);

  return (
    <FreelancerTemplate>
      <View style={homeScreenStyle.container}>
        <FreelancerHeader />
        <FreelancerCardOrderList />
        <VerticalSpacer size="l" />
        {/* Interaction View  -------------------------------------------- */}
        <View style={homeScreenStyle.interactionView}>
          <View style={[homeScreenStyle.balanceView, commonShadow.top]}>
            {/* Balance view goes here */}
            <View>
              <View
                style={[
                  homeScreenStyle.balanceViewColumn,
                  { alignItems: 'flex-start' },
                ]}
              >
                <Paragraph theme="smallRegular" color="black" lineNumber={1}>
                  Số dư{' '}
                  <FAIcon
                    iconName="faCircleQuestionRegular"
                    color={COLOR_PALETTE.black}
                    size={10}
                    style={{ opacity: 0.7 }}
                  />
                </Paragraph>
                <Paragraph theme="largeBold" color="primary" lineNumber={1}>
                  3.526.000 đ
                </Paragraph>
              </View>
            </View>
            <View
              style={[
                homeScreenStyle.balanceViewColumn,
                { alignItems: 'flex-end' },
              ]}
            >
              <BaseLink screen="Account">
                <Paragraph theme="smallRegular" color="black" lineNumber={1}>
                  Ví của tôi{' '}
                  <FAIcon
                    iconName="faChevronRight"
                    color={COLOR_PALETTE.black}
                    size={10}
                    style={{ opacity: 0.9 }}
                  />
                </Paragraph>
              </BaseLink>

              <PrimaryBtn
                title="Nạp tiền"
                onPress={() => {}}
                isFitContent={true}
                fontSize="small"
                iconName="faWallet"
                iconPosition="left"
              />
            </View>
          </View>
          <View style={[homeScreenStyle.jobSettingView, commonShadow.top]}>
            <View>
              <View style={homeScreenStyle.jobSettingRowCenter}>
                <FAIcon iconName="faBusinessTime" color={COLOR_PALETTE.black} />
                <Paragraph theme="smallBold" color="black">
                  Bật tìm việc
                </Paragraph>
              </View>
              <View style={[homeScreenStyle.jobSettingRowCenter]}>
                <Switch />
              </View>
            </View>
          </View>
        </View>
        {/* Order Marketplace -------------------------------------------- */}
        <VerticalSpacer size="xl" />
        <View style={homeScreenStyle.innerContentWrapper}>
          <Title theme="baseBold" color="primary">
            Sàn dịch vụ{' '}
            <FAIcon
              iconName="faCircleQuestionRegular"
              color={COLOR_PALETTE.primary}
              size={15}
            />
          </Title>
        </View>
        <VerticalSpacer size="l" />
        <View style={{ paddingLeft: screenHorizontalPadding }}>
          <PrimaryScrollView direction="horizontal">
            {ORDER_MARKETPLACE_SORT_CRITERIA.map((sc) =>
              sc.id === currentMarketplaceSortCriteria.id ? (
                <React.Fragment key={sc.id}>
                  <PrimaryBtn
                    title={sc.name}
                    onPress={() => handleChangeSortCriteria(sc)}
                    fontSize="small"
                    radius="full"
                    isFitContent={true}
                  />
                  <HorizontalSpacer size="m" />
                </React.Fragment>
              ) : (
                <React.Fragment key={sc.id}>
                  <SecondaryBtn
                    key={sc.id}
                    title={sc.name}
                    onPress={() => handleChangeSortCriteria(sc)}
                    fontSize="small"
                    radius="full"
                    isFitContent={true}
                  />
                  <HorizontalSpacer size="m" />
                </React.Fragment>
              )
            )}
          </PrimaryScrollView>
        </View>
        <VerticalSpacer size="l" />
        <View style={homeScreenStyle.innerContentWrapper}>
          {Array.isArray(marketplaceOrders) ? (
            marketplaceOrders.length > 0 ? null : (
              <>
                <VerticalSpacer size="xxl" />
                <EmptyBoxWithLabel />
              </>
            )
          ) : (
            <>
              <VerticalSpacer size="xxl" />
              <View style={{ width: '100%', height: 100 }}>
                <InfiniteProgressBar
                  color="primary"
                  label="Đang lấy đơn trên sàn"
                />
              </View>
            </>
          )}
        </View>
      </View>
    </FreelancerTemplate>
  );
};

export default Home;
