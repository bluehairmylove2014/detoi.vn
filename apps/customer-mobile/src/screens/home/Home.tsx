import { View, Text, Button } from 'react-native';
import React from 'react';
import { HomeProps } from '../../config';
import tw from 'twrnc';

const Home: React.FC<HomeProps> = ({ route, navigation }) => {
  return (
    <View style={tw`w-full h-full bg-black`}>
      <View style={tw`w-full h-1/5`}></View>
    </View>
  );
};

export default Home;
