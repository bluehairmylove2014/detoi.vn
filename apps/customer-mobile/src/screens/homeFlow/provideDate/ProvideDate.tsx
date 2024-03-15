/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react/jsx-no-useless-fragment */
import { ProvideDateProps } from '../../../config';
import {
  VerticalSpacer,
  Paragraph,
  RoseTextarea,
  PrimaryBtn,
} from '@present-native/atoms';
import { FlatList, TouchableOpacity, View } from 'react-native';

import { provideDateStyle } from './styles';

import { useMemo, useState } from 'react';
import { COLOR_PALETTE } from '@present-native/styles';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import CustomerTemplate from '@present-native/templates/CustomerTemplate';
import { BannerTopSection, TimePicker } from '@present-native/molecules';
import { useCurrentOrderService } from '@business-layer/business-logic/lib/category';

const NUMBER_OF_DAYS = 14;

const calcFollowingDay = () => {
  const currentDate = new Date();
  const followingDay = new Date();
  followingDay.setDate(currentDate.getDate() + 1);

  return followingDay;
};

const constantTime = () => {
  const defaultTime = new Date();
  defaultTime.setHours(14);
  defaultTime.setMinutes(0);
  return defaultTime;
};

const ProvideDate: React.FC<ProvideDateProps> = ({ route, navigation }) => {
  const { currentOrderService: service } = useCurrentOrderService();
  const [selectedDate, setSelectedDate] = useState<Date>(calcFollowingDay);
  const [selectedTime, setSelectedTime] = useState<Date>(constantTime);
  const { handleSubmit, setValue, control } = useForm();

  const dateList: Date[] = useMemo(() => {
    const followingDay = calcFollowingDay();
    const list = [];

    // Generate dates for the next 14 days
    for (let i = 0; i < NUMBER_OF_DAYS; i++) {
      const date = new Date(followingDay);
      date.setDate(followingDay.getDate() + i);
      list.push(date);
    }

    return list;
  }, []);

  const onSuccessSubmitDate: SubmitHandler<FieldValues> = (data) => {
    const requireValue = data.require;
    console.log(requireValue);
    console.log(
      'T' + (selectedDate.getDay() + 1) + ', ngay ' + selectedDate.getDate()
    );
    console.log(selectedTime.getHours() + ' : ' + selectedTime.getMinutes());
    navigation.navigate('Summary');
  };

  const renderDateList = ({ item }: { item: Date }) => {
    const itemSelectedContainerStyle =
      selectedDate.getDate() === item.getDate()
        ? {
            backgroundColor: COLOR_PALETTE.secondary,
            borderColor: COLOR_PALETTE.transparent,
          }
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
            <Paragraph theme="largeBold" color="white">
              {itemDay}
            </Paragraph>
            <VerticalSpacer size="s" />
            <Paragraph theme="baseMedium" color="white">
              {itemDate}
            </Paragraph>
          </>
        ) : (
          <>
            <Paragraph theme="largeBold">{itemDay}</Paragraph>
            <VerticalSpacer size="s" />
            <Paragraph theme="baseMedium">{itemDate}</Paragraph>
          </>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <CustomerTemplate>
      <BannerTopSection
        url={service?.image ?? '#'}
        title={`DỊCH VỤ ${service?.name.toUpperCase()}`}
        subtitle={service?.description ?? ''}
      />
      <View>
        <View style={provideDateStyle.container}>
          <VerticalSpacer size="l" />
          <View style={provideDateStyle.labelTime}>
            <Paragraph theme="largeBold" color="primary">
              Thời gian làm việc
            </Paragraph>
            <Paragraph theme="baseSemibold">
              Tháng {(0 + (selectedDate.getMonth() + 1)).toString().slice(-2)},
              năm {selectedDate.getFullYear()}
            </Paragraph>
          </View>

          <VerticalSpacer size="xxl" />
          <View>
            <Paragraph theme="baseMedium">Chọn ngày làm</Paragraph>
            <VerticalSpacer size="l" />
            <FlatList
              data={dateList}
              renderItem={renderDateList}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <VerticalSpacer size="xl" />
          <TimePicker setTime={(time) => setSelectedTime(time)} />

          <VerticalSpacer size="xxxl" />
          <View>
            <Paragraph theme="baseBold">Yêu cầu thêm cho nhân viên</Paragraph>

            <VerticalSpacer size="s" />
            <Paragraph theme="smallMedium" color="gray">
              Bạn có yêu cầu gì thêm cho nhân viên không?
            </Paragraph>

            <VerticalSpacer size="l" />
            <View style={provideDateStyle.inputContainer}>
              <RoseTextarea
                control={control}
                placeholder="Nhập yêu cầu ở đây..."
                inputName="require"
                setValue={setValue}
              />
            </View>
          </View>

          <VerticalSpacer size="xxxl" />
          <View style={provideDateStyle.buttonContainer}>
            <PrimaryBtn
              title="Ghép cặp ngay"
              onPress={handleSubmit(onSuccessSubmitDate)}
            />
          </View>

          <VerticalSpacer size="xl" />
          <View>
            <Paragraph theme="smallBold" align="center">
              Lưu ý:
              <Paragraph theme="smallMedium">
                {' '}
                Sau khi ghép cặp, chúng tôi sẽ tìm các nhân viên phù hợp với
                bạn, mỗi người sẽ đưa ra mức giá khác nhau
                <Paragraph theme="smallBold">
                  , hãy chọn người và mức giá phù hợp nhất với bạn
                </Paragraph>
              </Paragraph>
            </Paragraph>
          </View>
        </View>
      </View>
    </CustomerTemplate>
  );
};

export default ProvideDate;
