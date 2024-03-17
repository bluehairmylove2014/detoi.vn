import { View, SafeAreaView } from 'react-native';
import React from 'react';
import { IOrderDetail } from '@business-layer/services/entities';
import { headerWithOrderStyles } from './styles';
import {
  CircleImage,
  OutlineBtn,
  Paragraph,
  Title,
} from '@present-native/atoms';

type headerWithOrderProps = {
  orderData: IOrderDetail;
};
const HeaderWithOrder: React.FC<headerWithOrderProps> = ({ orderData }) => {
  return (
    <View style={headerWithOrderStyles.container}>
      <SafeAreaView style={headerWithOrderStyles.safeContainer}>
        <View style={headerWithOrderStyles.orderDetailContainer}>
          <View style={headerWithOrderStyles.imageContainer}>
            <CircleImage
              source={{
                uri: 'https://detoivn.sirv.com/services/dondep/n%C3%A2-nhapho.png',
              }}
            />
          </View>
          <View style={headerWithOrderStyles.orderDetailTextContainer}>
            <Title theme="baseBold" lineNumber={1}>
              Dọn nhà phổ thông
            </Title>
            <Paragraph theme="smallRegular" lineNumber={1}>
              Joy Citipoint, Quốc Lộ 1A, KCX Linh Trung, Thủ Đức, Hồ Chí Minh,
              Việt Nam
            </Paragraph>
            <Paragraph theme="smallRegular" lineNumber={1}>
              17:30 | Thứ 3, 20 - 5 - 2014
            </Paragraph>
          </View>
        </View>
        <View style={headerWithOrderStyles.cancelOrderBtnContainer}>
          <OutlineBtn
            onPress={() => {}}
            title="?"
            radius="square"
            fontSize="small"
            color="primary"
            borderColor="primary"
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HeaderWithOrder;
