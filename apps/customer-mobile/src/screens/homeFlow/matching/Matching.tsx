import React, { useEffect, useState } from 'react';
import { MatchingProps } from '../../../config';
import CustomerTemplate from '@presentational/native/templates/CustomerTemplate';
import { HeaderWithOrder } from '@present-native/organisms';
import {
  IFreelancerAccountDetail,
  IOrderDetail,
} from '@business-layer/services/entities';
import {
  OutlineBtn,
  Paragraph,
  PrimaryBtn,
  Title,
  VerticalSpacer,
  InfiniteProgressBar,
} from '@present-native/atoms';
import { View } from 'react-native';
import { matchingStyles } from './styles';

import { MatchingFreelancerThumbnail } from '@present-native/molecules';
import { matchingFreelancerMockData } from './__mock__';
import { windowHeight } from '@constants/dimension';
import { HEADER_HEIGHT } from '@present-native/styles';
import ModalWrapper from '@present-native/templates/ModalWrapper';

const FILTER_CRITERIA = [
  {
    id: 'FILTER_CRITERIA@1',
    name: 'Tất cả',
    type: 'filter',
  },
  {
    id: 'FILTER_CRITERIA@2',
    name: 'Cá nhân',
    type: 'filter',
  },
  {
    id: 'FILTER_CRITERIA@3',
    name: 'Đội ngũ',
    type: 'filter',
  },
];
const SORT_CRITERIA = [
  {
    id: 'FILTER_CRITERIA@4',
    name: 'Mặc định',
    type: 'sort',
  },
  {
    id: 'FILTER_CRITERIA@5',
    name: 'Mới nhất',
    type: 'sort',
  },
  {
    id: 'FILTER_CRITERIA@6',
    name: 'Giá thấp nhất',
    type: 'sort',
  },
  {
    id: 'FILTER_CRITERIA@7',
    name: 'Đánh giá tốt nhất',
    type: 'sort',
  },
  {
    id: 'FILTER_CRITERIA@8',
    name: 'Nhiều người làm nhất',
    type: 'sort',
  },
  {
    id: 'FILTER_CRITERIA@9',
    name: 'Nhiều lượt ghép đơn nhất',
    type: 'sort',
  },
];

const Matching: React.FC<MatchingProps> = ({ route, navigation }) => {
  const order: IOrderDetail = {};
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [freelancers, setFreelancers] = useState<IFreelancerAccountDetail[]>(
    []
  );
  const [isFilterActive, setIsFilterActive] = useState<boolean>(false);
  const [filterCriteria, setFilterCriteria] = useState<string[]>([
    'FILTER_CRITERIA@1',
  ]);
  const [sortCriteria, setSortCriteria] = useState<string[]>([
    'FILTER_CRITERIA@4',
  ]);

  function handlePressFreelancerThumbnail(
    freelancerData: IFreelancerAccountDetail
  ) {
    navigation.navigate('FreelancerDetail', {
      freelancerAccountDetail: freelancerData,
    });
  }
  function openFilterModal() {
    if (freelancers.length > 0) {
      setIsFilterActive(true);
    }
  }
  function closeFilterModal() {
    console.log('CLOSE');
    setIsFilterActive(false);
  }
  function toggleCriteria(id: string, type: 'filter' | 'sort') {
    const [getter, setter] =
      type === 'filter'
        ? [filterCriteria, setFilterCriteria]
        : [sortCriteria, setSortCriteria];
    if (getter.includes(id)) {
      setter(getter.filter((gid) => gid !== id));
    } else {
      setter([...getter, id]);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      freelancers.length < 6 &&
        setFreelancers([
          ...freelancers,
          matchingFreelancerMockData[freelancers.length],
        ]);
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [freelancers.length]);

  return (
    <CustomerTemplate>
      <HeaderWithOrder orderData={order} />
      <VerticalSpacer size="l" />
      <View
        style={[
          matchingStyles.container,
          {
            height:
              freelancers.length === 0
                ? windowHeight - HEADER_HEIGHT - 100
                : 'auto',
          },
        ]}
      >
        {freelancers.length === 0 ? (
          <View style={matchingStyles.loadingContainer}>
            <InfiniteProgressBar
              color="primary"
              label="Đang ghép cặp"
              subLabel="Tiến trình có thể mất khá nhiều thời gian, bạn vẫn có thể dùng ứng dụng khác trong khi chờ, chúng tôi sẽ thông báo ngay khi tìm được nhân viên."
            />
          </View>
        ) : (
          <>
            <View style={matchingStyles.titleAndSortContainer}>
              <View style={matchingStyles.titleContainer}>
                <Title theme="baseMedium" color="primary" lineNumber={1}>
                  Chọn để xem chi tiết
                </Title>
              </View>

              <View style={matchingStyles.sortButtonContainer}>
                <PrimaryBtn
                  title="Bộ Lọc"
                  fontSize="small"
                  iconName="faArrowUpZA"
                  iconPosition="left"
                  gap={5}
                  radius="square"
                  onPress={openFilterModal}
                />
              </View>
            </View>
            <VerticalSpacer size="l" />
            <View style={matchingStyles.freelancersListContainer}>
              {freelancers.map((f) => (
                <MatchingFreelancerThumbnail
                  freelancerData={f}
                  onPress={handlePressFreelancerThumbnail}
                  key={f.accountId}
                />
              ))}
              <View style={matchingStyles.subLoadingContainer}>
                <InfiniteProgressBar color="primary" label="Đang tìm thêm..." />
              </View>
            </View>
          </>
        )}
      </View>

      <ModalWrapper
        isActive={isFilterActive}
        onClose={closeFilterModal}
        overlayColor="black"
      >
        <Title theme="baseBold">Bộ lọc</Title>

        <VerticalSpacer size="xxl" />
        <Paragraph theme="smallSemibold" color="primary">
          Hình thức
        </Paragraph>
        <VerticalSpacer size="l" />
        <View style={matchingStyles.btnWrapper}>
          {FILTER_CRITERIA.map((fc) => {
            const color = filterCriteria.includes(fc.id) ? 'primary' : 'black';
            return (
              <OutlineBtn
                title={fc.name}
                color={color}
                fontSize="small"
                radius="full"
                borderColor={color}
                isFitContent={true}
                onPress={() => toggleCriteria(fc.id, 'filter')}
                key={fc.id}
              />
            );
          })}
        </View>

        <VerticalSpacer size="xxl" />
        <Paragraph theme="smallSemibold" color="primary">
          Sắp xếp
        </Paragraph>
        <VerticalSpacer size="l" />
        <View style={matchingStyles.btnWrapper}>
          {SORT_CRITERIA.map((fc) => {
            const color = sortCriteria.includes(fc.id) ? 'primary' : 'black';
            return (
              <OutlineBtn
                title={fc.name}
                color={color}
                fontSize="small"
                radius="full"
                borderColor={color}
                isFitContent={true}
                onPress={() => toggleCriteria(fc.id, 'sort')}
                key={fc.id}
              />
            );
          })}
        </View>
      </ModalWrapper>
    </CustomerTemplate>
  );
};

export default Matching;
