import React from 'react';
import { View, Image } from 'react-native';
import {
  summaryOrderScreenStyle,
  addressSectionStyle,
  inforServiceSectionStyle,
  paymentSectionStyle,
} from './styles';
import { FAIcon } from '@present-native/atoms';
import { BlackParagraph, PrimaryParagraph } from '@present-native/atoms';
import { colors } from '@present-native/styles';
import { NumberToVND } from '@business-layer/business-logic/helper';

const SummaryOrder = () => {
  return (
    <View style={summaryOrderScreenStyle.container}>
      <View style={addressSectionStyle.container}>
        <View style={addressSectionStyle.head}>
          <PrimaryParagraph theme="baseBold">Địa điểm</PrimaryParagraph>
          <BlackParagraph theme="smallMedium">
            Lotte Cinema Thủ Đức
          </BlackParagraph>
        </View>
        <BlackParagraph theme="smallNormal">
          Joy Citipoint, Quốc Lộ 1A, KCX Linh Trung, KP.4, Thủ Đức, Hồ Chí Minh
          257/43 Phòng 2014 Căn hộ Sunrise Continent
        </BlackParagraph>
      </View>
      <View style={inforServiceSectionStyle.container}>
        <PrimaryParagraph theme="baseBold">Thông tin dịch vụ</PrimaryParagraph>
        <View style={inforServiceSectionStyle.body}>
          <View>
            <Image
              source={{
                uri: 'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg',
              }}
              style={{ width: 80, height: 80, borderRadius: 99 }}
            />
            <BlackParagraph theme="smallBold">Nhà / Nhà phố</BlackParagraph>
          </View>
          <View>
            <BlackParagraph theme="smallBold">
              Dọn nhà theo phòng - 5 phòng
            </BlackParagraph>
            <BlackParagraph theme="smallBold">
              Dọn nhà theo phòng - 5 phòng
            </BlackParagraph>
            <BlackParagraph theme="smallNormal">
              Dọn nhà theo phòng - 5 phòng
            </BlackParagraph>
            <BlackParagraph theme="smallNormal">
              Dọn nhà theo phòng - 5 phòng
            </BlackParagraph>
          </View>
        </View>
      </View>
      <View style={paymentSectionStyle.container}>
        <View style={paymentSectionStyle.head}>
          <BlackParagraph theme="baseBold">
            <FAIcon
              iconName="faCircleDollarToSlot"
              color={colors.black}
              size={14}
            />
            Phương thức thanh toán
          </BlackParagraph>
          <BlackParagraph theme="smallMedium">
            {NumberToVND({ amount: 800000 })}
          </BlackParagraph>
        </View>
        <View style={paymentSectionStyle.body}>
          <View style={paymentSectionStyle.option}>
            <BlackParagraph theme="smallNormal">
              Trực tuyến qua Momo
            </BlackParagraph>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SummaryOrder;
