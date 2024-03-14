import { TouchableOpacity, View, Image } from 'react-native';
import { Paragraph } from '../../text';
import { commonButtonStyles } from './styles';
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

const CountryCodeButton: React.FC<imageButtonProps> = ({
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
        <Paragraph theme="baseMedium">{title}</Paragraph>
      </View>
    </TouchableOpacity>
  );
};

export { CountryCodeButton };
