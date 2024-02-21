import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
  StatusBar,
} from 'react-native';

import { LoginProps } from '../../config';
import { loginScreenStyle } from './styles';
import { colors } from '@presentational/native/styles';
import { FAIcon } from '@present-native/atoms';

type CountryType =
  | {
      alpha2Code: string;
      name: string;
      callingCodes: string[];
      flag: string;
    }
  | undefined;

const Login: React.FC<LoginProps> = ({ route, navigation }) => {
  const [listCountry, setListCountry] = useState<CountryType[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<CountryType>({
    alpha2Code: 'VN',
    name: 'Vietnam',
    callingCodes: ['+84'],
    flag: 'https://flagsapi.com/VN/flat/64.png',
  });
  const [activeModal, setActiveModal] = useState(false);

  // Fetch Country API
  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then((response) => response.json())
      .then((data) => {
        const countryData: CountryType[] = data.map((item: CountryType) => {
          return {
            alpha2Code: item?.alpha2Code,
            name: item?.name,
            callingCodes: `+${item?.callingCodes[0]}`,
            flag: `https://flagsapi.com/${item?.alpha2Code}/flat/64.png`,
          };
        });

        //Assgin List Country From API
        setListCountry(countryData);
      });
  }, []);

  // Design Modal List To Choose Area
  const modalCountryList = () => {
    const renderItem = ({ item }: { item: CountryType }) => {
      return (
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 12,
            marginHorizontal: 20,
            borderBottomWidth: 1,
            borderColor: colors.zinc,
          }}
          onPress={() => {
            setSelectedCountry(item);
            setActiveModal(false);
          }}
        >
          <Image
            source={{ uri: item?.flag }}
            resizeMode="contain"
            style={{ width: 30, height: 25, marginRight: 10 }}
          />
          <Text style={{ color: colors.black, fontSize: 16 }}>
            {item?.name}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <Modal animationType="slide" transparent={true} visible={activeModal}>
        <TouchableWithoutFeedback onPress={() => {}}>
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <View
              style={{
                backgroundColor: colors.white,
                width: '100%',
                height: 'auto',
                marginTop: 100,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: colors.secondary,
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                  paddingVertical: 14,
                  paddingHorizontal: 20,
                }}
              >
                <Text
                  style={{
                    alignItems: 'center',
                    fontSize: 14,
                    fontWeight: '700',
                  }}
                >
                  Chọn quốc gia, khu vực
                </Text>
                {/* Close Button */}
                <TouchableOpacity
                  style={{
                    alignSelf: 'flex-start',
                  }}
                  onPress={() => {
                    setActiveModal(false);
                  }}
                >
                  <FAIcon iconName="faTimes" color={colors.black} size={25} />
                </TouchableOpacity>
              </View>

              {/* List Country */}
              <FlatList
                data={listCountry}
                renderItem={renderItem}
                horizontal={false}
                keyExtractor={(item) => item?.alpha2Code ?? ''}
                style={{ marginBottom: 30 }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  };
  return (
    <SafeAreaView>
      <StatusBar hidden />
      <View style={loginScreenStyle.container}>
        <View>
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
            Chỉ một bước nữa thôi!
          </Text>
          <Text style={{ fontSize: 14, marginTop: 5 }}>
            Nhập số điện thoại để đăng nhập
          </Text>
          <Text style={{ fontSize: 14, marginTop: 30 }}>
            Số điện thoại
            <Text style={{ fontSize: 16, color: colors.rose }}> *</Text>
          </Text>
        </View>

        <View style={loginScreenStyle.inputContainer}>
          <TouchableOpacity
            style={loginScreenStyle.selectFlagContainer}
            onPress={() => {
              setActiveModal(true);
            }}
          >
            <View style={{ justifyContent: 'center' }}>
              <Image
                source={{
                  uri: selectedCountry?.flag,
                }}
                resizeMode="contain"
                style={loginScreenStyle.flagIcon}
              />
            </View>
            <View>
              <Text
                style={{
                  justifyContent: 'center',
                  fontSize: 12,
                  marginLeft: 2,
                  fontWeight: '600',
                }}
              >
                {selectedCountry?.callingCodes}
              </Text>
            </View>
          </TouchableOpacity>
          <TextInput
            style={loginScreenStyle.input}
            placeholder="Nhập số điện thoại của bạn"
            placeholderTextColor={colors.gray}
            selectionColor={colors.black}
            keyboardType="numeric"
          />
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('OTPVertification');
            }}
            style={loginScreenStyle.buttonContinue}
          >
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={{ fontSize: 14, marginTop: 20 }}>
            Tôi đồng ý với các
            <Text style={{ color: colors.primary, fontWeight: 'bold' }}>
              {' '}
              Điều khoản dịch vụ
            </Text>{' '}
            và
            <Text style={{ color: colors.primary, fontWeight: 'bold' }}>
              {' '}
              Chính sách bảo mật
            </Text>{' '}
            của Detoi
          </Text>

          <TouchableOpacity
            onPress={() => {}}
            style={loginScreenStyle.buttonProblem}
          >
            <Text style={{ fontSize: 12, fontWeight: '600' }}>
              Có vấn đề với số điện thoại?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {modalCountryList()}
    </SafeAreaView>
  );
};

export default Login;
