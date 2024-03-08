import { View, StyleSheet } from 'react-native';
import { IService } from '@business-layer/services/entities/service';
import { ServiceItem } from './ServiceItem';

export const ServicesList = ({
  services,
  onSelectService,
}: {
  services: IService[];
  onSelectService: (service: IService) => void;
}) => {
  return (
    <View style={styles.container}>
      {services.map((s) => (
        <ServiceItem service={s} key={s.id} onSelectService={onSelectService} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
  },
});
