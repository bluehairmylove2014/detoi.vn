/* eslint-disable @typescript-eslint/no-unused-vars */
import { ActivityIndicator, Switch, View } from 'react-native';
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
import { ORDER_MARKETPLACE_SORT_CRITERIA } from '@constants/marketplace';
import EmptyBoxWithLabel from '@present-native/molecules/empty/EmptyBoxWithLabel';
import { PreviewCardOrder } from '@present-native/molecules';
import { orderListMockData } from './__mock__';
import { formatCurrency, generateBoxShadowStyle } from '@utils/helpers';
import { useGetFreelancerPreviewData } from '@business-layer/business-logic/lib/account';
import {
  useGetFreelancerIncomingOrders,
  // useGetMarketplaceOrders,
} from '@business-layer/business-logic/lib/order';
import { getMarketplaceOrdersPropsType } from '@business-layer/services';
import { ICoordinate, IOrderDetail } from '@business-layer/services/entities';

const Home: React.FC<NativeStackScreenProps<freelancerScreensList, 'Home'>> = ({
  route,
  navigation,
}) => {
  const { navigateToScreenInSameStack } = useAuthNavigation();
  const { data: freelancerPreviewData } = useGetFreelancerPreviewData();
  const { data: incomingOrders } = useGetFreelancerIncomingOrders();
  const [currentMarketplaceSortCriteria, setCurrentMarketplaceSortCriteria] =
    useState(ORDER_MARKETPLACE_SORT_CRITERIA[0]);
  const [isAutoFindingJob, setIsAutoFindingJob] = useState<boolean>(false);
  const [marketplaceOrdersCriteria, setMarketplaceOrdersCriteria] = useState<
    Omit<getMarketplaceOrdersPropsType, 'token'>
  >({
    sortingCol: 'ASCENDANT',
    sortType: 'DISTANCE',
    page: 1,
    pageSize: 5,
  });
  // const marketplaceOrders = useGetMarketplaceOrders(marketplaceOrdersCriteria);
  const marketplaceOrders = orderListMockData;
  const [currentLatLon, setCurrentLatLon] = useState<ICoordinate | undefined>({
    lat: 10.823,
    lon: 106.6296,
  });

  function handleChangeSortCriteria(criteria: { id: string; name: string }) {
    setCurrentMarketplaceSortCriteria(criteria);
  }
  function toggleSwitch() {
    setIsAutoFindingJob((previousState) => !previousState);
  }
  function handleViewMarketplaceOrderDetail(order: IOrderDetail) {
    navigateToScreenInSameStack('MarketplaceOrderDetail', {
      params: { order, freelancer: freelancerPreviewData },
    });
  }
  return (
    <FreelancerTemplate>
      <View style={homeScreenStyle.container}>
        <FreelancerHeader freelancerPreviewData={freelancerPreviewData} />
        <FreelancerCardOrderList orders={incomingOrders} />
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
                {freelancerPreviewData ? (
                  <Paragraph theme="largeBold" color="primary" lineNumber={1}>
                    {formatCurrency(freelancerPreviewData.balance, 'vnd')}
                  </Paragraph>
                ) : (
                  <ActivityIndicator />
                )}
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
          <View
            style={[
              homeScreenStyle.jobSettingView,
              generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 4, '#171717')
                .boxShadow,
            ]}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <View style={homeScreenStyle.jobSettingRowCenter}>
                <FAIcon iconName="faBusinessTime" color={COLOR_PALETTE.black} />
                <Paragraph theme="smallBold" color="black">
                  Bật tìm việc
                </Paragraph>
              </View>
              <VerticalSpacer size="m" />
              <View style={[homeScreenStyle.jobSettingRowCenter]}>
                <Switch
                  trackColor={{
                    false: COLOR_PALETTE.gray,
                    true: COLOR_PALETTE.soft,
                  }}
                  thumbColor={
                    isAutoFindingJob
                      ? COLOR_PALETTE.secondary
                      : COLOR_PALETTE.zinc
                  }
                  ios_backgroundColor={COLOR_PALETTE.gray}
                  onValueChange={toggleSwitch}
                  value={isAutoFindingJob}
                />
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
                  <View style={{ opacity: 0.5 }}>
                    <SecondaryBtn
                      key={sc.id}
                      title={sc.name}
                      onPress={() => handleChangeSortCriteria(sc)}
                      fontSize="small"
                      radius="full"
                      isFitContent={true}
                    />
                  </View>
                  <HorizontalSpacer size="m" />
                </React.Fragment>
              )
            )}
          </PrimaryScrollView>
        </View>
        <VerticalSpacer size="l" />
        <View style={homeScreenStyle.innerContentWrapper}>
          {Array.isArray(marketplaceOrders) ? (
            marketplaceOrders.length > 0 ? (
              marketplaceOrders.map((orderDetail) => (
                <React.Fragment key={orderDetail.id}>
                  <VerticalSpacer size="l" />
                  <PreviewCardOrder
                    orderDetail={orderDetail}
                    currentLatLon={currentLatLon}
                    onNavigate={() =>
                      handleViewMarketplaceOrderDetail(orderDetail)
                    }
                  />
                </React.Fragment>
              ))
            ) : (
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
