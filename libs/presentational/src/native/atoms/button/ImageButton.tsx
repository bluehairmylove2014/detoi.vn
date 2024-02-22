import { TouchableOpacity, View, Image } from 'react-native';
import { BlackParagraph } from '../text';
import { commonButtonStyles } from '@present-native/styles';
import React from 'react';

const themeList = {
  'square-rounded-bold': { borderRadius: 5 },
  'full-rounded-bold': { borderRadius: 999 },
};

type imageButtonProps = {
  title: string;
  uriImg: string;
  theme?: 'square-rounded-bold' | 'full-rounded-bold'; // Make theme optional
  onPress: () => void;
};

const ZincImageButton: React.FC<imageButtonProps> = ({
  title,
  uriImg,
  theme = 'square-rounded-bold',
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{ ...commonButtonStyles.imageButton, ...themeList[theme] }}
      onPress={onPress}
    >
      <View style={{ justifyContent: 'center' }}>
        <Image
          source={{
            uri: uriImg,
          }}
          resizeMode="contain"
          style={{ width: 30, height: 20 }}
        />
      </View>
      <View>
        <BlackParagraph theme="normalMedium">{title}</BlackParagraph>
      </View>
    </TouchableOpacity>
  );
};

export { ZincImageButton };
