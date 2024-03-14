import {
  FlatList,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Paragraph } from '../text';
import { FAIcon } from '../icon';
import { COLOR_PALETTE } from '@styles/color';
import { IOption } from '@business-layer/services/entities';
import { nativeIconNameType } from '@business-layer/business-logic/non-service-lib/fontawesome';
import { useEffect, useState } from 'react';

import { Control, FieldValues, UseFormSetValue } from 'react-hook-form';
import { TouchTheme } from '../theme';
import { useBlurTheme } from '@business-layer/business-logic/non-service-lib/blurTheme';
import { serviceRequirementsSelectStyle } from './styles';

const ServiceRequirementsSelect = ({
  label,
  labelIcon,
  placeholder,
  options,
  control,
  setValue,
  selectName,
}: {
  label: string;
  labelIcon: nativeIconNameType | null;
  placeholder: string;
  options?: IOption[];
  control: Control<FieldValues, any, FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  selectName: string;
}) => {
  const [activeModal, setActiveModal] = useState(false);
  const [optionSelected, setOptionSelected] = useState<string>('');
  const { setOpenBlurTheme } = useBlurTheme();

  const renderItem = ({ item }: { item: IOption }) => {
    return (
      <TouchableOpacity
        style={serviceRequirementsSelectStyle.optionContainer}
        onPress={() => {
          setOptionSelected(item.name);
          setActiveModal(false);
        }}
      >
        <Paragraph theme="largeBold">{item.name}</Paragraph>
        <View style={{ marginTop: 5 }}>
          <Paragraph theme="baseMedium">{item.description}</Paragraph>
        </View>
      </TouchableOpacity>
    );
  };

  const modalListDropdown = () => {
    return (
      <Modal animationType="slide" transparent={true} visible={activeModal}>
        <TouchTheme
          onPress={() => {
            setActiveModal(false);
            setOpenBlurTheme(false);
          }}
        />
        <View style={serviceRequirementsSelectStyle.modalContainer}>
          <View style={serviceRequirementsSelectStyle.backgroundModal}>
            <View style={serviceRequirementsSelectStyle.topModalContainer}>
              <Paragraph theme="largeBold">Tuỳ chọn</Paragraph>

              {/* Close Button */}
              <TouchableOpacity
                style={{
                  alignSelf: 'flex-start',
                }}
                onPress={() => {
                  setActiveModal(false);
                  setOpenBlurTheme(false);
                }}
              >
                <FAIcon
                  iconName="faTimes"
                  color={COLOR_PALETTE.black}
                  size={25}
                />
              </TouchableOpacity>
            </View>

            {/* List Option */}
            <FlatList
              data={options}
              renderItem={renderItem}
              horizontal={false}
              keyExtractor={(item) => item.id}
              style={{ marginBottom: 30 }}
            />
          </View>
        </View>
      </Modal>
    );
  };

  useEffect(() => {
    setOptionSelected(placeholder);
  }, []);
  return (
    <View style={serviceRequirementsSelectStyle.container}>
      <View style={serviceRequirementsSelectStyle.labelContainer}>
        {labelIcon ? (
          <View style={{ marginRight: 5 }}>
            <FAIcon
              iconName={labelIcon as nativeIconNameType}
              color={COLOR_PALETTE.black}
              size={15}
            />
          </View>
        ) : (
          <></>
        )}

        <View>
          <Paragraph theme="baseBold">
            {labelIcon ? ' | ' : ''} {label}
            <Paragraph theme="largeMedium"> *</Paragraph>
          </Paragraph>
        </View>
      </View>
      <TouchableWithoutFeedback
        onPress={() => {
          setActiveModal(true);
          setOpenBlurTheme(true);
        }}
      >
        <View style={serviceRequirementsSelectStyle.dropdownContainer}>
          <View style={{ marginRight: 15 }}>
            <Paragraph theme="smallMedium">{optionSelected}</Paragraph>
          </View>

          <FAIcon
            iconName="faCaretDown"
            color={COLOR_PALETTE.black}
            size={18}
          />
        </View>
      </TouchableWithoutFeedback>
      {modalListDropdown()}
    </View>
  );
};
export { ServiceRequirementsSelect };
