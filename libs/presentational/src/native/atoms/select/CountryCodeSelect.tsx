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
import { Paragraph } from '../text';
import { ICountryCode } from '@business-layer/services/entities/countryCode';
import { CountryCodeButton } from '../button';

const CountryCodeSelect = ({
  onSelect,
  defaultValue,
  isActiveBlur,
}: {
  onSelect: (value: ICountryCode) => void;
  isActiveBlur: (isActive: boolean) => void;
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
          <Paragraph theme="largeMedium">{item?.name}</Paragraph>
        </TouchableOpacity>
      );
    };

    return (
      <Modal animationType="slide" transparent={true} visible={activeModal}>
        <TouchableWithoutFeedback onPress={() => {}}>
          <View style={countryCodeSelectStyle.modalContainer}>
            <View style={countryCodeSelectStyle.backgroundModal}>
              <View style={countryCodeSelectStyle.topModalContainer}>
                <Paragraph theme="largeBold">Chọn quốc gia, khu vực</Paragraph>

                {/* Close Button */}
                <TouchableOpacity
                  style={{
                    alignSelf: 'flex-start',
                  }}
                  onPress={() => {
                    setActiveModal(false);
                    isActiveBlur(false);
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
      <CountryCodeButton
        onPress={() => {
          setActiveModal(true);
          isActiveBlur(true);
        }}
        title={selectedCountry?.callingCodes.toString()}
        theme="full-rounded-bold"
        uriImg={selectedCountry?.flag}
      />

      {modalCountryList()}
    </>
  );
};

export { CountryCodeSelect };
