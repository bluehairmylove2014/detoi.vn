import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { BlackParagraph } from '../../atoms/text';
import { CircleImage } from '@present-native/atoms/image';

export const ServiceCircleButtonWithLabel = ({
  serviceImageUrl,
  serviceName,
  width = 100,
}: {
  serviceImageUrl: string;
  serviceName: string;
  width?: number;
}) => {
  return (
    <TouchableOpacity style={{ ...styles.button, width }}>
      <CircleImage source={{ uri: serviceImageUrl }} />
      <BlackParagraph theme="baseBold">{serviceName}</BlackParagraph>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
  },
});
