import { View } from 'react-native';
import React from 'react';
import {
  HorizontalSpacer,
  PrimaryBtn,
  PrimaryScrollView,
  SecondaryBtn,
} from '@present-native/atoms';

type props = {
  onPress: (item: { id: string; name: string }) => void;
  itemList: { id: string; name: string }[];
  activeItemId: string;
};
const OnPressCustomControlBar: React.FC<props> = ({
  onPress,
  itemList,
  activeItemId,
}) => {
  return (
    <PrimaryScrollView direction="horizontal">
      {itemList.map((sc) =>
        sc.id === activeItemId ? (
          <React.Fragment key={sc.id}>
            <PrimaryBtn
              title={sc.name}
              onPress={() => onPress(sc)}
              fontSize="small"
              radius="full"
              isFitContent={true}
            />
            <HorizontalSpacer size="m" />
          </React.Fragment>
        ) : (
          <React.Fragment key={sc.id}>
            <View style={{ opacity: 0.5 }}>
              <SecondaryBtn
                key={sc.id}
                title={sc.name}
                onPress={() => onPress(sc)}
                fontSize="small"
                radius="full"
                isFitContent={true}
              />
            </View>
            <HorizontalSpacer size="m" />
          </React.Fragment>
        )
      )}
    </PrimaryScrollView>
  );
};

export default OnPressCustomControlBar;
