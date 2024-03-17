import React, { useState } from 'react';
import { MatchingProps } from '../../../config';
import CustomerTemplate from '@presentational/native/templates/CustomerTemplate';
import HeaderWithOrder from '@present-native/organisms/header/HeaderWithOrder';
import {
  IFreelancerAccountDetail,
  IOrderDetail,
} from '@business-layer/services/entities';
import {
  FAIcon,
  OverlayColor,
  Paragraph,
  PrimaryBtn,
  StarsAndReviewCount,
  Title,
  VerticalSpacer,
} from '@present-native/atoms';
import { Pressable, View } from 'react-native';
import { matchingStyles } from './styles';
import InfiniteProgressBar from '@present-native/atoms/loading/InfiniteProgressBar';
import { SquareImage } from '@present-native/atoms';
import { COLOR_PALETTE } from '@present-native/styles';

const Matching: React.FC<MatchingProps> = ({ route, navigation }) => {
  const order: IOrderDetail = {};
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [freelancers, setFreelancers] = useState<IFreelancerAccountDetail[]>([
    {
      account: {
        fullName: 'string',
        dateOfBirth: '2024-03-11',
        phone: '0708662391',
        role: 'Freelancer',
        avatar: 'https://detoivn.sirv.com/customer_avt/user-avt%20(2).png',
        id: '350e9153-5d29-49ec-3f70-08dc41db1ff1',
      },
      accountId: '350e9153-5d29-49ec-3f70-08dc41db1ff1',
      rating: 0,
      balance: 0,
      orderCount: 0,
      loveCount: 0,
      positiveReviewCount: 0,
      address: {
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        lat: 0,
        lon: 0,
        addressLine: 'string',
        ward: 'string',
        district: 'string',
        province: 'string',
        country: 'string',
      },
      identityNumber: 'string',
      isTeam: true,
      teamMemberCount: 1,
      description: '',
      previewPrice: 0,
      skills: [
        {
          id: '7105a90b-21e7-45e4-1b4b-08dc41db2005',
          name: 'string',
          description: 'string',
        },
      ],
      serviceProven: [],
    },
    {
      account: {
        fullName: 'string',
        dateOfBirth: '2024-03-11',
        phone: '0708662391',
        role: 'Freelancer',
        avatar: 'https://detoivn.sirv.com/customer_avt/user-avt%20(2).png',
        id: '350e9153-5d29-49ec-3f70-08dc41db1ff1',
      },
      accountId: '350e9153-5d29-49ec-3f70-08dc41db1ff1',
      rating: 0,
      balance: 0,
      orderCount: 0,
      loveCount: 0,
      positiveReviewCount: 0,
      address: {
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        lat: 0,
        lon: 0,
        addressLine: 'string',
        ward: 'string',
        district: 'string',
        province: 'string',
        country: 'string',
      },
      identityNumber: 'string',
      isTeam: true,
      teamMemberCount: 1,
      description: '',
      previewPrice: 0,
      skills: [
        {
          id: '7105a90b-21e7-45e4-1b4b-08dc41db2005',
          name: 'string',
          description: 'string',
        },
      ],
      serviceProven: [],
    },
    {
      account: {
        fullName: 'string',
        dateOfBirth: '2024-03-11',
        phone: '0708662391',
        role: 'Freelancer',
        avatar: 'https://detoivn.sirv.com/customer_avt/user-avt%20(2).png',
        id: '350e9153-5d29-49ec-3f70-08dc41db1ff1',
      },
      accountId: '350e9153-5d29-49ec-3f70-08dc41db1ff1',
      rating: 0,
      balance: 0,
      orderCount: 0,
      loveCount: 0,
      positiveReviewCount: 0,
      address: {
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        lat: 0,
        lon: 0,
        addressLine: 'string',
        ward: 'string',
        district: 'string',
        province: 'string',
        country: 'string',
      },
      identityNumber: 'string',
      isTeam: true,
      teamMemberCount: 1,
      description: '',
      previewPrice: 0,
      skills: [
        {
          id: '7105a90b-21e7-45e4-1b4b-08dc41db2005',
          name: 'string',
          description: 'string',
        },
      ],
      serviceProven: [],
    },
  ]);
  return (
    <CustomerTemplate>
      <HeaderWithOrder orderData={order} />
      <VerticalSpacer size="l" />
      <View style={matchingStyles.container}>
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
            <VerticalSpacer size="l" />
            <View style={matchingStyles.freelancersListContainer}>
              {freelancers.map((f) => (
                <Pressable
                  style={{
                    width: '46%',
                    overflow: 'hidden',
                    borderRadius: 8,
                    position: 'relative',
                  }}
                >
                  <SquareImage source={{ uri: f.account.avatar }} />
                  <OverlayColor theme="black-gradient" />
                  <View
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      zIndex: 2,
                      paddingHorizontal: 15,
                      paddingBottom: 10,
                      width: '100%',
                    }}
                  >
                    <StarsAndReviewCount
                      point={f.rating}
                      reviewsCount={f.positiveReviewCount}
                    />
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                      }}
                    >
                      <Paragraph theme="baseBold" color="white">
                        800.000đ
                      </Paragraph>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: 5,
                        }}
                      >
                        <FAIcon
                          iconName="faPeopleGroup"
                          color={COLOR_PALETTE.white}
                        />
                        <Paragraph theme="smallBold" color="white">
                          1
                        </Paragraph>
                      </View>
                    </View>
                  </View>
                </Pressable>
              ))}
            </View>
          </>
        )}
      </View>
    </CustomerTemplate>
  );
};

export default Matching;
