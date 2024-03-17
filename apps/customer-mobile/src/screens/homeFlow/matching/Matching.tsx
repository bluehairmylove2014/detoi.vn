/* eslint-disable @typescript-eslint/no-unused-vars */
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
import {
  MatchingFilterCriteriaID,
  MATCHING_FILTER_CRITERIA,
  MATCHING_SORT_CRITERIA,
  MatchingSortCriteriaID,
} from '@constants/matchingFilterNSort';

const DEFAULT_FILTER_CRITERIA = MatchingFilterCriteriaID.All;
const DEFAULT_SORT_CRITERIA = MatchingSortCriteriaID.Default;

const Matching: React.FC<MatchingProps> = ({ route, navigation }) => {
  const order: IOrderDetail = {};
  const [matchingFreelancersRealTime, setMatchingFreelancersRealTime] =
    useState<IFreelancerAccountDetail[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [freelancers, setFreelancers] = useState<IFreelancerAccountDetail[]>(
    []
  );
  const [isFilterActive, setIsFilterActive] = useState<boolean>(false);
  const [filterCriteriaId, setFilterCriteriaId] =
    useState<MatchingFilterCriteriaID>(DEFAULT_FILTER_CRITERIA);
  const [sortCriteriaId, setSortCriteriaId] = useState<MatchingSortCriteriaID>(
    DEFAULT_SORT_CRITERIA
  );

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
  function selectFilterCriteria(id: MatchingFilterCriteriaID) {
    setFilterCriteriaId(id);
  }
  function selectSortCriteria(id: MatchingSortCriteriaID) {
    setSortCriteriaId(id);
  }
  function handleFilter(id: string, sorts: string) {}
  function handleResetFilterAndSortCriteria() {
    setFilterCriteriaId(DEFAULT_FILTER_CRITERIA);
    setSortCriteriaId(DEFAULT_SORT_CRITERIA);
  }

  useEffect(() => {
    setTimeout(() => {
      matchingFreelancersRealTime.length < 6 &&
        setMatchingFreelancersRealTime([
          ...matchingFreelancersRealTime,
          matchingFreelancerMockData[matchingFreelancersRealTime.length],
        ]);
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchingFreelancersRealTime.length]);

  useEffect(() => {
    if (matchingFreelancersRealTime.length > 0) {
      let newFreelancers: IFreelancerAccountDetail[] = [];
      switch (filterCriteriaId) {
        case MatchingFilterCriteriaID.Individual: {
          matchingFreelancersRealTime.forEach(
            (f) => f.isTeam === false && newFreelancers.push(f)
          );
          break;
        }
        case MatchingFilterCriteriaID.Team: {
          matchingFreelancersRealTime.forEach(
            (f) => f.isTeam === true && newFreelancers.push(f)
          );
          break;
        }
        case MatchingFilterCriteriaID.All: {
          newFreelancers = [...matchingFreelancersRealTime];
          break;
        }
      }
      switch (sortCriteriaId) {
        case MatchingSortCriteriaID.Default: {
          // SKIP
          break;
        }
        case MatchingSortCriteriaID.BestRating:
          newFreelancers.sort((a, b) => b.rating - a.rating);
          break;
        case MatchingSortCriteriaID.LowestPrice:
          newFreelancers.sort((a, b) => a.previewPrice - b.previewPrice);
          break;
        case MatchingSortCriteriaID.MostEmployees:
          newFreelancers.sort((a, b) => b.teamMemberCount - a.teamMemberCount);
          break;
        case MatchingSortCriteriaID.Nearest: {
          // SKIP
          break;
        }
      }

      setFreelancers(newFreelancers);
    }
  }, [matchingFreelancersRealTime, filterCriteriaId, sortCriteriaId]);

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
        <View>
          <Title theme="baseBold">Bộ lọc</Title>

          <VerticalSpacer size="xxl" />
          <Paragraph theme="smallSemibold" color="primary">
            Hình thức
          </Paragraph>
          <VerticalSpacer size="l" />
          <View style={matchingStyles.btnWrapper}>
            {MATCHING_FILTER_CRITERIA.map((fc) => {
              const color = filterCriteriaId.includes(fc.id)
                ? 'primary'
                : 'black';
              return (
                <OutlineBtn
                  title={fc.name}
                  color={color}
                  fontSize="small"
                  radius="full"
                  borderColor={color}
                  isFitContent={true}
                  onPress={() => selectFilterCriteria(fc.id)}
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
            {MATCHING_SORT_CRITERIA.map((fc) => {
              const color = sortCriteriaId.includes(fc.id)
                ? 'primary'
                : 'black';
              return (
                <OutlineBtn
                  title={fc.name}
                  color={color}
                  fontSize="small"
                  radius="full"
                  borderColor={color}
                  isFitContent={true}
                  onPress={() => selectSortCriteria(fc.id)}
                  key={fc.id}
                />
              );
            })}
          </View>
        </View>
        <VerticalSpacer size="xxxl" />
        <View style={matchingStyles.filterCommitContainer}>
          <View style={{ flexShrink: 1 }}>
            <OutlineBtn
              title="Làm mới"
              fontSize="medium"
              radius="square"
              onPress={handleResetFilterAndSortCriteria}
              color="primary"
              borderColor="primary"
            />
          </View>

          <View style={{ flexShrink: 1 }}>
            <PrimaryBtn
              title="Xác nhận"
              fontSize="medium"
              radius="square"
              onPress={() => {
                closeFilterModal();
              }}
            />
          </View>
        </View>
      </ModalWrapper>
    </CustomerTemplate>
  );
};

export default Matching;
