import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { IService } from '@business-layer/services/entities/service';
import { CircleImage } from '@present-native/atoms/image';
import { Paragraph, HorizontalSpacer } from '@present-native/atoms';

export const ServiceItem = ({
  service,
  onSelectService,
}: {
  service: IService;
  onSelectService: (service: IService) => void;
}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => onSelectService(service)}
    >
      <View style={styles.imageContainer}>
        <CircleImage source={{ uri: service.image }} />
      </View>
      <HorizontalSpacer size="l" />
      <View style={styles.textContainer}>
        <Paragraph theme="largeBold">{service.name}</Paragraph>
        <Paragraph theme="smallMedium">{service.description}</Paragraph>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  imageContainer: {
    width: 50,
  },
  textContainer: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
