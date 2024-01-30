import React from 'react';
import { withExpoSnack } from 'nativewind';
import { Text, View } from 'react-native';
import { styled } from 'nativewind';
import ArticleCard from '@presentational-mobile/src/atoms';

const StyledView = styled(View)
const StyledText = styled(Text)

const Box = ({ className = '', ...props }) => (
  <StyledText className={`flex h-14 w-2/5 m-2 justify-center items-center text-white bg-fuchsia-500 rounded ${className}`} {...props}/>
)

const App = () => {
  return (
    <StyledView className="flex flex-1 flex-col justify-center items-center">
      <ArticleCard />
    </StyledView>
  );
}

// This demo is using a external compiler that will only work in Expo Snacks.
// You may see flashes of unstyled content, this will not occur under normal use!
// Please see the documentation to setup your application
export default withExpoSnack(App);