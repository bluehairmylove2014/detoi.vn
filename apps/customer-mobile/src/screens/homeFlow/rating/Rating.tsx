import React, { useEffect, useState } from 'react';
import { RatingProps } from '../../../config';
import { View } from 'react-native';
import {
  CircleImage,
  GrayDivider,
  Paragraph,
  PrimaryBtn,
  RatingStarsIndex,
  VerticalSpacer,
} from '@present-native/atoms';
import {
  avatarSection,
  buttonFootSection,
  ratingScreenStyle,
  ratingSection,
  totalPriceSection,
} from './styles';
import { formatCurrency } from '@utils/helpers/MoneyConverter';

const RatingScreen: React.FC<RatingProps> = ({ route, navigation }) => {
  const [ratingIndex, setRatingIndex] = useState<number>(0);

  useEffect(() => {
    if (ratingIndex) {
      navigation.navigate('Review', { ratingIndex });
    }
  }, [ratingIndex]);

  const infoBill = {
    avaEmplyee: '',
    nameEmployee: 'Phan Dương Minh',
    payment: 'Thanh toán COD',
    totalMoney: '850000',
    distance: '10',
  };
  const avatar =
    'https://www.womenonbusiness.com/wp-content/uploads/2018/05/employee-management.png';

  return (
    <View style={ratingScreenStyle.container}>
      <View style={ratingScreenStyle.head}>
        <Paragraph theme="baseMedium" align="right">
          Cần hỗ trợ ?
        </Paragraph>
      </View>
      <View style={ratingScreenStyle.body}>
        <View style={avatarSection.container}>
          <View style={avatarSection.avatarWrapper}>
            <CircleImage
              source={{
                uri: avatar,
              }}
            />
          </View>
        </View>
        <VerticalSpacer size="xl" />
        <View style={ratingSection.container}>
          <Paragraph theme="largeBold" color="primary" align="center">
            Đánh giá chất lượng dịch vụ
          </Paragraph>
          <VerticalSpacer size="m" />
          <Paragraph theme="smallMedium" color="primary" align="center">
            Bạn thấy thế nào về chất lượng dịch vụ lần này?
          </Paragraph>
          <VerticalSpacer size="l" />
          <RatingStarsIndex
            ratingIndex={ratingIndex}
            setRatingIndex={setRatingIndex}
          />
        </View>
        <VerticalSpacer size="xxxl" />
        <View style={totalPriceSection.container}>
          <GrayDivider direction="horizontal" />
          <VerticalSpacer size="l" />
          <View style={totalPriceSection.keyValueContainer}>
            <Paragraph theme="smallMedium" align="left">
              Tổng đã trả
            </Paragraph>
            <Paragraph theme="smallMedium" align="right">
              {formatCurrency(parseInt(infoBill.totalMoney), 'vnd')}
            </Paragraph>
          </View>
          <VerticalSpacer size="l" />
          <GrayDivider direction="horizontal" />
        </View>
      </View>
      <View style={ratingScreenStyle.foot}>
        <View style={buttonFootSection.container}>
          <PrimaryBtn
            onPress={() => {
              navigation.navigate('Home');
            }}
            title="Trở về trang chủ"
            radius="square"
          />
        </View>
      </View>
    </View>
  );
};

export default React.memo(RatingScreen);
