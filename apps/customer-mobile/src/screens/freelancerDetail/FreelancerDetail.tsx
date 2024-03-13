import CustomerTemplate from '@present-native/templates/CustomerTemplate';
import React from 'react';
import { Image, View } from 'react-native';
import { freelancerDetailScreenStyle, insightSectionStyle } from './styles';
import { Paragraph, VerticalSpacer } from '@present-native/atoms';
import { colors, screenHorizontalPadding } from '@present-native/styles';
import { FreelancerDetailProps } from '../../config';
import { BannerFreelancerDetail } from '@present-native/molecules';
import { windowWidth } from '@constants/dimension';
// import { IFreelancerAccountDetail } from '@business-layer/services/entities';

const imageWidth = windowWidth / 2 - screenHorizontalPadding - 5;
type ImageData = {
  id: string;
  source: string;
};
 
const FreelancerDetail = React.memo(
  ({ route, navigation }: FreelancerDetailProps) => {
    // const {freelancerAccountDetail} = route.params;
    const freelancerAccountDetailTemporary = {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      account: {
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        email: 'string',
        fullName: 'Phan Dương Minh',
        dateOfBirth: '2024-03-06',
        phone: 'string',
        role: 'string',
        avatar: 'https://detoivn.sirv.com/freelancer/avatars/f1.png',
        refreshToken: 'string',
        loginToken: 'string',
        loginTokenExpires: '2024-03-06T13:13:42.505Z',
        tokenCreated: '2024-03-06T13:13:42.505Z',
        tokenExpires: '2024-03-06T13:13:42.505Z',
        isActive: true,
        isVerified: true,
      },
      accountId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      rating: 5,
      balance: 300000,
      orderCount: 232,
      loveCount: 100,
      positiveReviewCount: 21,
      address: {
        addressLine: 'string',
        ward: 'string',
        district: 'string',
        province: 'string',
        country: 'string',
      },
      identityNumber: 'string',
      isTeam: false,
      skills: [
        {
          name: 'string',
          description: 'string',
        },
      ],
      description:
        'Nhân viên vệ sinh chuyên nghiệp, tận tâm, luôn giữ gìn sạch sẽ cho môi trường. Có kỹ năng tổ chức, sắp xếp công việc hiệu quả. Luôn tạo ra một môi trường làm việc tốt nhất cho mọi người.',
    };

    const serviceProven: ImageData[] = [
      {
        id: '1',
        source: 'https://detoivn.sirv.com/freelancer/service-provens/p1.png',
      },
      {
        id: '2',
        source: 'https://detoivn.sirv.com/freelancer/service-provens/p2.png',
      },
      {
        id: '3',
        source: 'https://detoivn.sirv.com/freelancer/service-provens/p5.png',
      },
      {
        id: '4',
        source: 'https://detoivn.sirv.com/freelancer/service-provens/p3.png',
      },
      {
        id: '5',
        source: 'https://detoivn.sirv.com/freelancer/service-provens/p6.png',
      },
      {
        id: '6',
        source: 'https://detoivn.sirv.com/freelancer/service-provens/p3.png',
      },
    ];
    const { rating, account, description, isTeam, balance } = freelancerAccountDetailTemporary;

    return (
      <CustomerTemplate>
        <View style={freelancerDetailScreenStyle.container}>
          <View style={freelancerDetailScreenStyle.introSection}>
            <BannerFreelancerDetail
              url={freelancerAccountDetailTemporary.account.avatar}
              ratingNumber={rating}
              fullName={account.fullName}
              isTeam={isTeam}
              balance={balance}
            />
          </View>
          <View style={freelancerDetailScreenStyle.insightSection}>
            <View style={insightSectionStyle.wrapperInsight}>
              <Paragraph theme="baseBold" color="white">
                {freelancerAccountDetailTemporary.orderCount}
              </Paragraph>
              <Paragraph theme="baseRegular" color="white">
                Đơn dịch vụ
              </Paragraph>
            </View>
            <View style={insightSectionStyle.wrapperInsight}>
              <Paragraph theme="baseBold" color="white">
                {freelancerAccountDetailTemporary.positiveReviewCount}
              </Paragraph>
              <Paragraph theme="baseRegular" color="white">
                Đánh giá tốt
              </Paragraph>
            </View>
            <View style={insightSectionStyle.wrapperInsight}>
              <Paragraph theme="baseBold" color="white">
                {freelancerAccountDetailTemporary.loveCount}
              </Paragraph>
              <Paragraph theme="baseRegular" color="white">
                Yêu thích
              </Paragraph>
            </View>
          </View>
          <View style={freelancerDetailScreenStyle.proofOfWorkSection}>
            <Paragraph theme="baseMedium" color="white">
              Mô tả ngắn
            </Paragraph>
            <View
              style={{
                width: 'Mô tả ngắn'.length * 5,
                backgroundColor: colors.white,
                height: 1.5,
                marginVertical: 5,
              }}
            />
            <VerticalSpacer size="m" />
            <Paragraph theme="baseRegular" color="white" align='justify'>
              {description}
            </Paragraph>
            <VerticalSpacer size="xl" />
            <Paragraph theme="baseMedium" color="white">
              Minh chứng công việc
            </Paragraph>
            <View
              style={{
                width: 'Minh chứng công việc'.length * 5,
                backgroundColor: colors.white,
                height: 1.5,
                marginVertical: 5,
              }}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}
            ></View>
            <VerticalSpacer size="m" />
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {serviceProven.map((item, index) => (
                <Image
                  key={index}
                  source={{ uri: item.source }}
                  style={{
                    width: imageWidth,
                    height: imageWidth,
                    marginRight: index % 2 === 0 ? 5 : 0,
                    marginLeft: index % 2 === 1 ? 5 : 0,
                    marginVertical: 5,
                  }}
                />
              ))}
          </View>
          </View>
        </View>
      </CustomerTemplate>
    );
  }
);

export default FreelancerDetail;
