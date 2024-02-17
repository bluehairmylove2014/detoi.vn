import React from 'react';
import { withExpoSnack } from 'nativewind';

import { Text, View, ViewProps, TextProps } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

interface BoxProps extends TextProps {
  className?: string;
}

const Box: React.FC<BoxProps> = ({ className = '', ...props }) => (
  <StyledText className={`flex text-center h-14 w-14 justify-center items-center text-white bg-fuchsia-500 rounded ${className}`} {...props} />
);

const App: React.FC = () => {
  return (
    <StyledView className="flex flex-row h-screen space-x-2">
      <Box>01</Box>
      <Box>02</Box>
      <Box>03</Box>
    </StyledView>
  );
};

// This demo is using a external compiler that will only work in Expo Snacks.
// You may see flashes of unstyled content, this will not occur under normal use!
// Please see the documentation to setup your application
export default withExpoSnack(App);
