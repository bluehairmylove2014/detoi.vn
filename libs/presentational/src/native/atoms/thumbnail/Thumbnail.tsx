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
      <Image source={{ uri: image }} style={ThumbnailSectionStyle[theme]} />
    </TouchableOpacity>
  );
};

export { Thumbnail };
