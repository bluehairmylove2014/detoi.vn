import { StyleSheet, Pressable } from 'react-native';
import { Paragraph } from '../../atoms/text';
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
    <Pressable style={{ ...styles.button, width }}>
      <CircleImage source={{ uri: serviceImageUrl }} />
      <Paragraph theme="baseBold" align="center">
        {serviceName}
      </Paragraph>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
  },
});
