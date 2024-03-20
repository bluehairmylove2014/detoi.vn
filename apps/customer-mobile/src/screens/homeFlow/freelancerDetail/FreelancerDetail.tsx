import CustomerTemplate from '@present-native/templates/CustomerTemplate';
import React, { useCallback } from 'react';
import { Image, TouchableWithoutFeedback, View } from 'react-native';
import {
  freelancerDetailScreenStyle,
  insightSectionStyle,
  titleStyle,
  proofOfWorkSectionStyle,
} from './styles';
import { Paragraph, VerticalSpacer } from '@present-native/atoms';
import { FreelancerDetailProps } from '../../../config';
import { BannerFreelancerDetail } from '@present-native/molecules';

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
    const { freelancerAccountDetail, orderId } = route.params;

    const actionMoveToImageDetailScreen = useCallback(
      (source: string) => {
        navigation.navigate('FreelancerServiceProven', {
          imageUrl: source,
        });
      },
      [navigation]
    );
    const onSelectFreelancer = () => {
      navigation.navigate('Summary', {
        pricing: freelancerAccountDetail.previewPrice,
        orderId,
        freelancerId: freelancerAccountDetail.accountId,
      });
    };

    return (
      <CustomerTemplate>
        <View style={freelancerDetailScreenStyle.container}>
          <View style={freelancerDetailScreenStyle.introSection}>
            <BannerFreelancerDetail
              url={freelancerAccountDetail.account.avatar}
              ratingNumber={freelancerAccountDetail.rating}
              ratingCount={freelancerAccountDetail.totalReviewCount}
              fullName={freelancerAccountDetail.account.fullName}
              isTeam={freelancerAccountDetail.isTeam}
              balance={freelancerAccountDetail.previewPrice}
              onSelectFreelancer={onSelectFreelancer}
            />
          </View>
          <View style={freelancerDetailScreenStyle.insightSection}>
            <View style={insightSectionStyle.wrapperInsight}>
              <InsightItem
                insightNumber={freelancerAccountDetail.orderCount}
                title="Đơn dịch vụ"
              />
            </View>
            <View style={insightSectionStyle.wrapperInsight}>
              <InsightItem
                insightNumber={freelancerAccountDetail.positiveReviewCount}
                title="Đánh giá tốt"
              />
            </View>
            <View style={insightSectionStyle.wrapperInsight}>
              <InsightItem
                insightNumber={freelancerAccountDetail.loveCount}
                title="Yêu thích"
              />
            </View>
          </View>
          <View style={freelancerDetailScreenStyle.proofOfWorkSection}>
            <TitleSectionFreelancerDetail title="Mô tả ngắn" />
            <VerticalSpacer size="m" />
            <Paragraph theme="baseRegular" color="white" align="justify">
              {freelancerAccountDetail.description}
            </Paragraph>
            <VerticalSpacer size="xl" />
            <TitleSectionFreelancerDetail title="Minh chứng công việc" />
            <VerticalSpacer size="m" />
            <View style={proofOfWorkSectionStyle.listImage}>
              {freelancerAccountDetail.serviceProven.map((item, index) => (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => actionMoveToImageDetailScreen(item.after)}
                >
                  <Image
                    source={{ uri: item.after }}
                    style={proofOfWorkSectionStyle.image}
                  />
                </TouchableWithoutFeedback>
              ))}
            </View>
          </View>
        </View>
      </CustomerTemplate>
    );
  }
);

export default FreelancerDetail;
