import CustomerTemplate from '@present-native/templates/CustomerTemplate';
import React, { useCallback } from 'react';
import { Image, TouchableHighlight, View } from 'react-native';
import {
  freelancerDetailScreenStyle,
  insightSectionStyle,
  titleStyle,
  proofOfWorkSectionStyle,
} from './styles';
import { Paragraph, VerticalSpacer } from '@present-native/atoms';
import { FreelancerDetailProps } from '../../../config';
import { BannerFreelancerDetail } from '@present-native/molecules';
import { IFreelancerAccountDetail } from '@business-layer/services/entities';

type ImageData = {
  id: string;
  source: string;
};

const TitleSectionFreelancerDetail = React.memo(
  ({ title }: { title: string }) => {
    return (
      <React.Fragment>
        <Paragraph theme="baseMedium" color="white">
          {title}
        </Paragraph>
        <View
          style={[
            titleStyle.underlineTitleStyle,
            {
              width: title.length * 5,
            },
          ]}
        />
      </React.Fragment>
    );
  }
);

const InsightItem = React.memo(
  ({ title, insightNumber }: { title: string; insightNumber: number }) => {
    return (
      <React.Fragment>
        <Paragraph theme="baseBold" color="white">
          {insightNumber}
        </Paragraph>
        <Paragraph theme="baseRegular" color="white">
          {title}
        </Paragraph>
      </React.Fragment>
    );
  }
);

const FreelancerDetail = React.memo(
  ({ route, navigation }: FreelancerDetailProps) => {
    // const {freelancerAccountDetail} = route.params;
    const freelancerAccountDetailTemporary: IFreelancerAccountDetail = {
      account: {
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        fullName: 'Phan Dương Minh',
        dateOfBirth: '2024-03-06',
        phone: 'string',
        role: 'string',
        avatar: 'https://detoivn.sirv.com/freelancer/avatars/f1.png',
      },
      accountId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      rating: 5,
      balance: 300000,
      orderCount: 232,
      loveCount: 100,
      positiveReviewCount: 21,
      address: {
        id: '123',
        addressLine: 'string',
        ward: 'string',
        district: 'string',
        province: 'string',
        country: 'string',
        lat: 123,
        lon: 123,
      },
      identityNumber: 'string',
      isTeam: false,
      skills: [
        {
          id: '1',
          name: 'string',
          description: 'string',
        },
      ],
      description:
        'Nhân viên vệ sinh chuyên nghiệp, tận tâm, luôn giữ gìn sạch sẽ cho môi trường. Có kỹ năng tổ chức, sắp xếp công việc hiệu quả. Luôn tạo ra một môi trường làm việc tốt nhất cho mọi người.',
      teamMemberCount: 0,
      serviceProven: [],
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
    const { rating, account, description, isTeam, balance } =
      freelancerAccountDetailTemporary;

    const actionMoveToImageDetailScreen = useCallback(
      (source: string) => {
        navigation.navigate('ImageDetail', {
          imageUrl: source,
        });
      },
      [navigation]
    );

    return (
      <CustomerTemplate isHideTransparentView={false}>
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
              <InsightItem
                insightNumber={freelancerAccountDetailTemporary.orderCount}
                title="Đơn dịch vụ"
              />
            </View>
            <View style={insightSectionStyle.wrapperInsight}>
              <InsightItem
                insightNumber={
                  freelancerAccountDetailTemporary.positiveReviewCount
                }
                title="Đánh giá tốt"
              />
            </View>
            <View style={insightSectionStyle.wrapperInsight}>
              <InsightItem
                insightNumber={freelancerAccountDetailTemporary.loveCount}
                title="Yêu thích"
              />
            </View>
          </View>
          <View style={freelancerDetailScreenStyle.proofOfWorkSection}>
            <TitleSectionFreelancerDetail title="Mô tả ngắn" />
            <VerticalSpacer size="m" />
            <Paragraph theme="baseRegular" color="white" align="justify">
              {description}
            </Paragraph>
            <VerticalSpacer size="xl" />
            <TitleSectionFreelancerDetail title="Minh chứng công việc" />
            <VerticalSpacer size="m" />
            <View style={proofOfWorkSectionStyle.listImage}>
              {serviceProven.map((item, index) => (
                <TouchableHighlight
                  key={index}
                  onPress={() => actionMoveToImageDetailScreen(item.source)}
                >
                  <Image
                    source={{ uri: item.source }}
                    style={proofOfWorkSectionStyle.image}
                  />
                </TouchableHighlight>
              ))}
            </View>
          </View>
        </View>
      </CustomerTemplate>
    );
  }
);

export default FreelancerDetail;
