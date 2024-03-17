import React, { useEffect, useState } from 'react';
import { MatchingProps } from '../../../config';
import CustomerTemplate from '@presentational/native/templates/CustomerTemplate';
import HeaderWithOrder from '@present-native/organisms/header/HeaderWithOrder';
import {
  IFreelancerAccountDetail,
  IOrderDetail,
} from '@business-layer/services/entities';
import {
  OutlineBtn,
  Paragraph,
  PrimaryBtn,
  Title,
  VerticalSpacer,
} from '@present-native/atoms';
import { Animated, Modal, View } from 'react-native';
import { matchingStyles } from './styles';
import InfiniteProgressBar from '@present-native/atoms/loading/InfiniteProgressBar';

import MatchingFreelancerThumbnail from '@present-native/molecules/matchingThumbnail/MatchingFreelancerThumbnail';
import { matchingFreelancerMockData } from './__mock__';
import { windowHeight, windowWidth } from '@constants/dimension';
import { HEADER_HEIGHT } from '@present-native/styles';

const Matching: React.FC<MatchingProps> = ({ route, navigation }) => {
  const order: IOrderDetail = {};
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [freelancers, setFreelancers] = useState<IFreelancerAccountDetail[]>(
    []
  );

  function handlePressFreelancerThumbnail(
    freelancerData: IFreelancerAccountDetail
  ) {
    navigation.navigate('FreelancerDetail', {
      freelancerAccountDetail: freelancerData,
    });
  }

  useEffect(() => {
    setTimeout(() => {
      freelancers.length < 3 &&
        setFreelancers([
          ...freelancers,
          matchingFreelancerMockData[freelancers.length],
        ]);
    }, 4000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [freelancers.length]);

  return (
    <CustomerTemplate>
      <HeaderWithOrder orderData={order} />
      <VerticalSpacer size="l" />
      <View
        style={[
          matchingStyles.container,
          {
            height:
              freelancers.length === 0
                ? windowHeight - HEADER_HEIGHT - 100
                : 'auto',
          },
        ]}
      >
        {freelancers.length === 0 ? (
          <View style={matchingStyles.loadingContainer}>
            <InfiniteProgressBar
              color="primary"
              label="Đang ghép cặp"
              subLabel="Tiến trình có thể mất khá nhiều thời gian, bạn vẫn có thể dùng ứng dụng khác trong khi chờ, chúng tôi sẽ thông báo ngay khi tìm được nhân viên."
            />
          </View>
        ) : (
          <>
            <View style={matchingStyles.titleAndSortContainer}>
              <View style={matchingStyles.titleContainer}>
                <Title theme="baseMedium" color="primary" lineNumber={1}>
                  Chọn để xem chi tiết
                </Title>
              </View>

              <View style={matchingStyles.sortButtonContainer}>
                <PrimaryBtn
                  title="Bộ Lọc"
                  fontSize="small"
                  iconName="faArrowUpZA"
                  iconPosition="left"
                  gap={5}
                  radius="square"
                  onPress={() => {}}
                />
              </View>
            </View>
            <VerticalSpacer size="l" />
            <View style={matchingStyles.freelancersListContainer}>
              {freelancers.map((f) => (
                <MatchingFreelancerThumbnail
                  freelancerData={f}
                  onPress={handlePressFreelancerThumbnail}
                  key={f.accountId}
                />
              ))}
              <View style={matchingStyles.subLoadingContainer}>
                <InfiniteProgressBar color="primary" label="Đang tìm thêm..." />
              </View>
            </View>
          </>
        )}
      </View>

      <Modal animationType="slide" transparent={true}>
        <View style={matchingStyles.filterContainer}>
          <View style={matchingStyles.filterWrapper}>
            <Title theme="baseBold">Bộ lọc</Title>

            <VerticalSpacer size="xxl" />
            <Paragraph theme="smallSemibold" color="primary">
              Hình thức
            </Paragraph>
            <VerticalSpacer size="l" />
            <View style={matchingStyles.btnWrapper}>
              <OutlineBtn
                title="Tất cả"
                color="primary"
                fontSize="small"
                radius="full"
                borderColor="primary"
                isFitContent={true}
                onPress={() => {}}
              />
              <OutlineBtn
                title="Cá nhân"
                color="primary"
                fontSize="small"
                radius="full"
                borderColor="primary"
                isFitContent={true}
                onPress={() => {}}
              />
              <OutlineBtn
                title="Đội ngũ"
                color="primary"
                fontSize="small"
                radius="full"
                borderColor="primary"
                isFitContent={true}
                onPress={() => {}}
              />
            </View>

            <VerticalSpacer size="xxl" />
            <Paragraph theme="smallSemibold" color="primary">
              Sắp xếp
            </Paragraph>
            <VerticalSpacer size="l" />
            <View style={matchingStyles.btnWrapper}>
              <OutlineBtn
                title="Mặc định"
                color="primary"
                fontSize="small"
                radius="full"
                borderColor="primary"
                isFitContent={true}
                onPress={() => {}}
              />

              <OutlineBtn
                title="Mới nhất"
                color="primary"
                fontSize="small"
                radius="full"
                borderColor="primary"
                isFitContent={true}
                onPress={() => {}}
              />

              <OutlineBtn
                title="Giá thấp nhất"
                color="primary"
                fontSize="small"
                radius="full"
                borderColor="primary"
                isFitContent={true}
                onPress={() => {}}
              />

              <OutlineBtn
                title="Đánh giá tốt nhất"
                color="primary"
                fontSize="small"
                radius="full"
                borderColor="primary"
                isFitContent={true}
                onPress={() => {}}
              />

              <OutlineBtn
                title="Nhiều người làm nhất"
                color="primary"
                fontSize="small"
                radius="full"
                borderColor="primary"
                isFitContent={true}
                onPress={() => {}}
              />

              <OutlineBtn
                title="Nhiều lượt ghép đơn nhất"
                color="primary"
                fontSize="small"
                radius="full"
                borderColor="primary"
                isFitContent={true}
                onPress={() => {}}
              />
            </View>
          </View>
        </View>
      </Modal>
    </CustomerTemplate>
  );
};

export default Matching;
