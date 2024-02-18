import { View, Text, Button } from 'react-native';
import React from 'react';
import { ChooseLocationProps } from '../../config';

const ChooseLocation: React.FC<ChooseLocationProps> = ({
  route,
  navigation,
}) => {
  return (
    <View>
      <Text>ChooseLocation</Text>
      <Button
        title="go"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default ChooseLocation;
