/* eslint-disable react/jsx-no-useless-fragment */
import { ProvideDateProps } from '../../config';
import {
  BlackParagraph,
  BlurTheme,
  FAIcon,
  GrayParagraph,
  HorizontalSpacer,
  PrimaryButton,
  SecondaryParagraph,
  VerticalSpacer,
  WhiteParagraph,
} from '@present-native/atoms';
import {
  FlatList,
  Modal,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { provideDateStyle } from './styles';

import { useMemo, useState } from 'react';
import { colors } from '@present-native/styles';
import TimePicker from '@present-native/molecules/timePicker/TimePicker';
import { Controller, useForm } from 'react-hook-form';
import CustomerTemplate from '@present-native/templates/CustomerTemplate';

type requirementInputFormType = {
  require: string;
};

const ProvideDate: React.FC<ProvideDateProps> = ({ route, navigation }) => {
  const [activeModal, setActiveModal] = useState(false);
  const [actveBlur, setActiveBlur] = useState(false);

  const [selectedDate, setSelectedDate] = useState<Date>(() => {
    const currentDate = new Date();
    const followingDay = new Date();
    followingDay.setDate(currentDate.getDate() + 1);

    return followingDay;
  });

  const { handleSubmit, setValue, control } = useForm<requirementInputFormType>(
    {
      defaultValues: {
        require: '',
      },
    }
  );

  const dateList: Date[] = useMemo(() => {
    const currentDate = new Date();
    const followingDay = new Date();
    followingDay.setDate(currentDate.getDate() + 1);

    const list = [];

    // Generate dates for the next 14 days
    for (let i = 0; i < 14; i++) {
      const date = new Date(followingDay);
      date.setDate(followingDay.getDate() + i);
      list.push(date);
    }

    return list;
  }, []);

  const onSuccessSubmitDate = ({ require }: requirementInputFormType) => {};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onErrorSubmit = (error: Record<string, any>) => {
    console.log(error);
    // HANDLE INVALID PHONE NUMBER HERE
  };

  const renderItem = ({ item }: { item: Date }) => {
    const itemSelectedContainerStyle =
      selectedDate.getDate() === item.getDate()
        ? { backgroundColor: colors.secondary, borderColor: colors.transparent }
        : {};

    const itemDate = (0 + item.getDate().toString().toString()).slice(-2);

    let itemDay = 'T' + (item.getDay() + 1).toString();
    if (item.getDay() === 0) itemDay = 'CN';

    return (
      <TouchableOpacity
        onPress={() => setSelectedDate(item)}
        style={[provideDateStyle.dateContainer, itemSelectedContainerStyle]}
      >
        {selectedDate.getDate() === item.getDate() ? (
          <>
            <WhiteParagraph theme="largeBold">{itemDay}</WhiteParagraph>
            <VerticalSpacer size="s" />
            <WhiteParagraph theme="baseMedium">{itemDate}</WhiteParagraph>
          </>
        ) : (
          <>
            <BlackParagraph theme="largeBold">{itemDay}</BlackParagraph>
            <VerticalSpacer size="s" />
            <GrayParagraph theme="baseMedium">{itemDate}</GrayParagraph>
          </>
        )}
      </TouchableOpacity>
    );
  };

  // Design Modal List To Choose Time
  const modalTimePicker = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={activeModal}
        style={{ height: 50 }}
      >
        <TouchableWithoutFeedback>
          <View style={provideDateStyle.modalContainer}>
            <View style={provideDateStyle.backgroundModal}>
              <View style={provideDateStyle.topModalContainer}>
                <BlackParagraph theme="baseBold">Chọn thời gian</BlackParagraph>

                {/* Close Button */}
                <TouchableOpacity
                  style={{
                    alignSelf: 'flex-start',
                  }}
                  onPress={() => {
                    setActiveModal(false);
                    setActiveBlur(false);
                  }}
                >
                  <FAIcon iconName="faTimes" color={colors.black} size={25} />
                </TouchableOpacity>
              </View>
              <TimePicker />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  };
  return (
    <CustomerTemplate>
      <SafeAreaView>
        {actveBlur ? <BlurTheme /> : <></>}

        <View style={provideDateStyle.container}>
          <View style={provideDateStyle.labelTime}>
            <SecondaryParagraph theme="largeBold">
              Thời gian làm việc
            </SecondaryParagraph>
            <BlackParagraph theme="baseSemiBold">
              Tháng {(0 + (selectedDate.getMonth() + 1)).toString().slice(-2)},
              năm {selectedDate.getFullYear()}
            </BlackParagraph>
          </View>

          <VerticalSpacer size="xxl" />
          <View>
            <BlackParagraph theme="baseMedium">Chọn ngày làm</BlackParagraph>
            <VerticalSpacer size="l" />
            <FlatList
              data={dateList}
              renderItem={renderItem}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <VerticalSpacer size="xl" />
          <View style={provideDateStyle.chooseTimeContainer}>
            <View style={provideDateStyle.chooseTimeLabel}>
              <FAIcon iconName="faClock" size={20} color={colors.secondary} />
              <HorizontalSpacer size="m"></HorizontalSpacer>
              <BlackParagraph theme="baseBold">Chọn giờ làm</BlackParagraph>
            </View>
            <TouchableOpacity
              style={provideDateStyle.chooseTimeButton}
              onPress={() => {
                setActiveModal(true);
                setActiveBlur(true);
              }}
            >
              <BlackParagraph theme="baseBold">14</BlackParagraph>
              <BlackParagraph theme="baseMedium">|</BlackParagraph>
              <BlackParagraph theme="baseBold">00</BlackParagraph>
            </TouchableOpacity>
          </View>

          <VerticalSpacer size="xxxl" />
          <View style={provideDateStyle.inputRequirementAddContainer}>
            <BlackParagraph theme="baseBold">
              Yêu cầu thêm cho nhân viên
            </BlackParagraph>

            <VerticalSpacer size="s" />
            <GrayParagraph theme="smallMedium">
              Bạn có yêu cầu gì thêm cho nhân viên không?
            </GrayParagraph>

            <VerticalSpacer size="l" />
            <View style={provideDateStyle.inputContainer}>
              <Controller
                name="require"
                control={control}
                render={({ field }) => (
                  <TextInput
                    style={provideDateStyle.input}
                    placeholder="Nhập yêu cầu ở đây..."
                    placeholderTextColor={colors.gray}
                    selectionColor={colors.black}
                    numberOfLines={4}
                    multiline={true}
                    {...field}
                    onChangeText={(value) => {
                      field.onChange(value);
                      setValue('require', value);
                    }}
                  />
                )}
              />
            </View>
          </View>

          <VerticalSpacer size="xxxl" />
          <VerticalSpacer size="xl" />
          <View style={provideDateStyle.buttonContainer}>
            <PrimaryButton
              title="Ghép cặp ngay"
              theme="square-rounded-bold"
              onPress={handleSubmit(onSuccessSubmitDate, onErrorSubmit)}
            />
          </View>

          <VerticalSpacer size="xl" />
          <View>
            <BlackParagraph theme="smallBold" align="center">
              Lưu ý:
              <BlackParagraph theme="smallMedium">
                {' '}
                Sau khi ghép cặp, chúng tôi sẽ tìm các nhân viên phù hợp với
                bạn, mỗi người sẽ đưa ra mức giá khác nhau
                <BlackParagraph theme="smallBold">
                  , hãy chọn người và mức giá phù hợp nhất với bạn
                </BlackParagraph>
              </BlackParagraph>
            </BlackParagraph>
          </View>

          {modalTimePicker()}
        </View>
      </SafeAreaView>
    </CustomerTemplate>
  );
};

export default ProvideDate;
