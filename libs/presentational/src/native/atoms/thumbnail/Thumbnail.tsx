import { ThumbnailSectionStyle } from '@present-native/styles/thumbnail';
import { Image, TouchableOpacity } from 'react-native';

const Thumbnail = ({
  theme,
  image,
}: {
  theme: keyof typeof ThumbnailSectionStyle;
  image: string;
}) => {
  return (
    <TouchableOpacity>
      <Image
        source={require('@assets/member1.png')}
        style={ThumbnailSectionStyle[theme]}
      />
    </TouchableOpacity>
  );
};

export { Thumbnail };
