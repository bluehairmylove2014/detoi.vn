import { Button, Text } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { HomeProps } from '../../config';

const Home: React.FC<HomeProps> = ({ route, navigation }) => {
  return (
    <Text
      style={tw`text-xl font-bold text-rose-600 bg-black w-full h-full flex justify-center items-center`}
    >
      I am in Home Screen
      <Button
        title="Add some friends"
        onPress={() => {
          navigation.navigate('ChooseLocation');
        }}
      />
    </Text>
  );
};

export default Home;
