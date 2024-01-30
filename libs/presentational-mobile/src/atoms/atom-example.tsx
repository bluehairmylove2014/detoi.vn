import React = require('react');
import { View, Text, TouchableOpacity } from 'react-native';

export default function ArticleCard() {
  const handleRedirect = () => {
    console.log('Handle Click');
  };
  return (
    <View className={'w-full bg-white rounded-3xl p-5 my-2'}>
      <View className="bg-white rounded-xl"></View>
      <View className="mt-5">
        <Text className={'text-sm text-black/60'}>Published -</Text>
        <Text className={'text-lg font-semibold'}>Tittle</Text>
        <Text numberOfLines={2} className={'text-sm text-black/60'}>
          Description
        </Text>
        <TouchableOpacity
          className="flex-row justify-center rounded-full bg-gray-700 p-3 w-10/12 self-center mt-5"
          onPress={() => handleRedirect()}
        >
          <Text className="text-white font-bold">Read more</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
