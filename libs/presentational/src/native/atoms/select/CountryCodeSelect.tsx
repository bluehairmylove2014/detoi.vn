import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { colors, countryCodeSelectStyle } from '@present-native/styles';
import { FAIcon } from '../icon';
import { BlackParagraph } from '../text';
import { ICountryCode } from '@business-layer/services/entities/countryCode';

const CountryCodeSelect = ({
  onSelect,
  defaultValue,
}: {
  onSelect: (value: ICountryCode) => void;
  defaultValue: ICountryCode;
}) => {
  const [listCountry, setListCountry] = useState<ICountryCode[]>([]);
  const [selectedCountry, setSelectedCountry] =
    useState<ICountryCode>(defaultValue);
  const [activeModal, setActiveModal] = useState(false);

  // Fetch Country API
  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then((response) => response.json())
      .then((data) => {
        const countryData: ICountryCode[] = data.map((item: ICountryCode) => {
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
    const renderItem = ({ item }: { item: ICountryCode }) => {
      return (
        <TouchableOpacity
          style={countryCodeSelectStyle.optionContainer}
          onPress={() => {
            setSelectedCountry(item);
            setActiveModal(false);
            onSelect(item);
          }}
        >
          <Image
            source={{ uri: item?.flag }}
            resizeMode="contain"
            style={countryCodeSelectStyle.optionImg}
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
          <View style={countryCodeSelectStyle.modalContainer}>
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
    <>
      <TouchableOpacity
        style={countryCodeSelectStyle.selectFlagContainer}
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
            style={countryCodeSelectStyle.flagIcon}
          />
        </View>
        <View>
          <BlackParagraph theme="normalPrimary">
            {selectedCountry?.callingCodes}
          </BlackParagraph>
        </View>
      </TouchableOpacity>
      {modalCountryList()}
    </>
  );
};

export { CountryCodeSelect };
