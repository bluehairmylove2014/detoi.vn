import React, { useState } from 'react';
import { View } from 'react-native';
import { buttonFootSection, ratingSection, reviewScreenStyle } from './styles';
import {
  Paragraph,
  PrimaryBtn,
  RatingStarsIndex,
  ReviewTextarea,
  VerticalSpacer,
} from '@present-native/atoms';
import { useRatingOrder } from '@business-layer/business-logic/lib/rating';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { customerScreensList } from '@constants/customerScreens';

const RATING_INSIGHT = [
  'Quá tệ',
  'Không hài lòng',
  'Bình thường',
  'Tốt',
  'Hoàn hảo',
];

const ReviewScreen: React.FC<
  NativeStackScreenProps<customerScreensList, 'Review'>
> = ({ route, navigation }) => {
  const { ratingIndex, orderId } = route.params;
  const [textReview, setTextReview] = useState<string>('');
  const { onRatingOrder } = useRatingOrder();

  function handleRating() {
    onRatingOrder({ rating: ratingIndex + 1, comment: textReview, orderId })
      .then((msg) => {
        // TODO
      })
      .catch((error) => {
        // TODO
      });
  }

  return (
    <View style={reviewScreenStyle.container}>
      <View style={reviewScreenStyle.head}>
        <Paragraph theme="baseMedium" align="right">
          Cần hỗ trợ ?
        </Paragraph>
      </View>
      <View style={reviewScreenStyle.body}>
        <View style={ratingSection.container}>
          <Paragraph theme="largeBold" color="primary">
            {ratingIndex ? RATING_INSIGHT[ratingIndex - 1] : ''}
          </Paragraph>
          <RatingStarsIndex
            ratingIndex={ratingIndex}
            setRatingIndex={(index: number) => {}}
            canRating={false}
          />
        </View>
        <VerticalSpacer size="xxxl" />
        <View>
          <ReviewTextarea
            placeholder={`Nhận xét (Không bắt buộc) \n\n\n\n\n`}
            textInput={textReview}
            setTextInput={setTextReview}
          />
        </View>
      </View>
      <View style={reviewScreenStyle.foot}>
        <View style={buttonFootSection.container}>
          <PrimaryBtn
            onPress={handleRating}
            title="Gửi đánh giá"
            radius="square"
          />
        </View>
      </View>
    </View>
  );
};

export default React.memo(ReviewScreen);
