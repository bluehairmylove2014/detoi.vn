import { View, Text } from 'react-native';
import React from 'react';
import { ChooseLocationProps } from '../../config';

const ChooseLocation: React.FC<ChooseLocationProps> = ({
  route,
  navigation,
}) => {
  return (
    <View>
      <Text>ChooseLocation</Text>
    </View>
  );
};

export default ChooseLocation;
