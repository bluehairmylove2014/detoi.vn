import { ThumbnailSectionStyle } from './styles';
import { Image, TouchableOpacity } from 'react-native';

const Thumbnail = ({
  theme,
  image,
}: {
  theme: keyof typeof ThumbnailSectionStyle;
  image: string;
}) => {
  return (
    <TouchableOpacity style={ThumbnailSectionStyle[theme]}>
      <Image
        source={{ uri: image }}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </TouchableOpacity>
  );
};

export { Thumbnail };
