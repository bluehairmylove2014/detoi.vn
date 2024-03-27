import { View, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { freelancerScreensList } from '@constants/freelancerScreens';
import FreelancerTemplate from '@present-native/templates/FreelancerTemplate';
import {
  BaseLink,
  HorizontalSpacer,
  Paragraph,
  PrimaryScrollView,
  Title,
  VerticalSpacer,
} from '@present-native/atoms';
import { addSkillsStyles } from './styles';
import {
  ServiceCircleButtonWithLabel,
  SimpleSearchBox,
} from '@present-native/molecules';
import { useGetAllCategories } from '@business-layer/business-logic/lib/category';
import ModalWrapper from '@present-native/templates/ModalWrapper';

const AddSkills: React.FC<
  NativeStackScreenProps<freelancerScreensList, 'AddSkills'>
> = () => {
  const { data: categories } = useGetAllCategories();
  const [selectedServiceName, setSelectedServiceName] = useState<string>('');
  function handleSearchSkills(value: string) {
    console.log('VALUE: ', value);
  }
  function handleSelectCategory(serviceName: string) {
    setSelectedServiceName(
      serviceName === selectedServiceName ? '' : serviceName
    );
  }
  return (
    <FreelancerTemplate>
      <View style={addSkillsStyles.screenContainer}>
        <SafeAreaView>
          <View style={addSkillsStyles.contentContainer}>
            <Title theme="largeBold" color="primary">
              Bạn có những kỹ năng gì?
            </Title>
            <VerticalSpacer size="s" />
            <Paragraph theme="smallMedium" color="primary">
              Chúng tôi sẽ dựa vào kỹ năng của bạn để hỗ trợ tìm được các đơn
              dịch vụ chính xác hơn
            </Paragraph>

            <VerticalSpacer size="xl" />
            <Paragraph theme="baseBold" color="primary">
              Tìm kỹ năng theo loại dịch vụ
            </Paragraph>

            <VerticalSpacer size="l" />
            {Array.isArray(categories) ? (
              categories.length > 0 ? (
                <PrimaryScrollView direction="horizontal">
                  {categories.map((c) => (
                    <React.Fragment key={c.id}>
                      <ServiceCircleButtonWithLabel
                        serviceImageUrl={c.image}
                        serviceName={c.name}
                        width={100}
                        fontSize="smallMedium"
                        activeServiceName={selectedServiceName}
                        onPress={handleSelectCategory}
                      />
                      <HorizontalSpacer size="l" />
                    </React.Fragment>
                  ))}
                </PrimaryScrollView>
              ) : null
            ) : null}

            <VerticalSpacer size="l" />
            <Paragraph theme="baseBold" color="primary">
              Tìm theo tên kỹ năng
            </Paragraph>
            <SimpleSearchBox
              baseColor="primary"
              onChange={handleSearchSkills}
            />
          </View>
          {/* <ModalWrapper
            isActive={true}
            // backgroundColor="soft"
            // overlayColor="transparent"
            // overlayOpacity={0}
            onClose={() => {}}
          >
            <Paragraph theme="baseBold" color="primary">
              Bạn đã chọn:
            </Paragraph>
            <VerticalSpacer size="xl" />
            <BaseLink screen="Home">
              <Paragraph
                theme="smallRegular"
                color="black"
                decoration="underline"
                align="center"
              >
                Không có kỹ năng bạn muốn?
              </Paragraph>
            </BaseLink>
          </ModalWrapper> */}
        </SafeAreaView>
      </View>
    </FreelancerTemplate>
  );
};

export default AddSkills;
