import {
  FlatList,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { BlackParagraph, RoseParagraph } from '../text';
import { FAIcon } from '../icon';
import { colors, serviceRequirementsSelectStyle } from '@present-native/styles';
import {
  IOption,
  IServiceRequirement,
} from '@business-layer/services/entities';
import { nativeIconNameType } from '@business-layer/business-logic/non-service-lib/fontawesome';
import { useEffect, useState } from 'react';
import { BlurTheme } from '../theme';

const ServiceRequirementsSelect = ({
  serviceRequirement,
}: {
  serviceRequirement: IServiceRequirement;
}) => {
  const [activeModal, setActiveModal] = useState(false);
  const [optionSelected, setOptionSelected] = useState<string>('');

  const renderItem = ({ item }: { item: IOption }) => {
    return (
      <TouchableOpacity
        style={serviceRequirementsSelectStyle.optionContainer}
        onPress={() => {
          setOptionSelected(item.name);
          setActiveModal(false);
        }}
      >
        <BlackParagraph theme="largeBold">{item.name}</BlackParagraph>
        <View style={{ marginTop: 5 }}>
          <BlackParagraph theme="normalMedium">
            {item.description}
          </BlackParagraph>
        </View>
      </TouchableOpacity>
    );
  };

  const modalListDropdown = () => {
    return (
      <Modal animationType="none" transparent={true} visible={activeModal}>
        <BlurTheme />
        <TouchableWithoutFeedback onPress={() => {}}>
          <View style={serviceRequirementsSelectStyle.modalContainer}>
            <View style={serviceRequirementsSelectStyle.backgroundModal}>
              <View style={serviceRequirementsSelectStyle.topModalContainer}>
                <BlackParagraph theme="largeBold">Tuỳ chọn</BlackParagraph>

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

              {/* List Option */}
              <FlatList
                data={
                  serviceRequirement.type.name === 'select'
                    ? serviceRequirement.type.options
                    : null
                }
                renderItem={renderItem}
                horizontal={false}
                keyExtractor={(item) => item?.id ?? ''}
                style={{ marginBottom: 30 }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  };

  useEffect(() => {
    setOptionSelected(serviceRequirement.placeholder);
  }, []);
  return (
    <>
      <View style={serviceRequirementsSelectStyle.container}>
        <View style={serviceRequirementsSelectStyle.labelContainer}>
          <FAIcon
            iconName={serviceRequirement.labelIcon as nativeIconNameType}
            color={colors.black}
            size={15}
          />

          <View style={{ marginLeft: 5 }}>
            <BlackParagraph theme="normalBold">
              | {serviceRequirement.label}
              <RoseParagraph theme="largeMedium"> *</RoseParagraph>
            </BlackParagraph>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={() => setActiveModal(true)}>
          <View style={serviceRequirementsSelectStyle.dropdownContainer}>
            <View style={{ marginRight: 15 }}>
              <BlackParagraph theme="smallMedium">
                {optionSelected}
              </BlackParagraph>
            </View>

            <FAIcon iconName="faCaretDown" color={colors.black} size={18} />
          </View>
        </TouchableWithoutFeedback>
        {modalListDropdown()}
      </View>
    </>
  );
};
export { ServiceRequirementsSelect };
