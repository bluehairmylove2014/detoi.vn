import { IPaymentMethod } from '@business-layer/services/entities';
import { Image, Text, Pressable, View } from 'react-native';
import { Paragraph } from '../text';
import { COLOR_PALETTE } from '@styles/color';
import { paymentMethodStyles } from './styles';

export const PaymentMethod = ({
  method,
  onSelect,
  isActive,
}: {
  method: IPaymentMethod;
  onSelect: (id: string) => void;
  isActive: boolean;
}) => {
  return (
    <Pressable
      onPress={() => onSelect(method.id)}
      style={paymentMethodStyles.container}
    >
      <Image source={{ uri: method.logo }} style={paymentMethodStyles.logo} />
      <Paragraph theme="largeMedium">{method.title}</Paragraph>
      <View
        style={[
          paymentMethodStyles.dot,
          {
            backgroundColor: isActive
              ? COLOR_PALETTE.secondary
              : COLOR_PALETTE.transparent,
          },
        ]}
      />
    </Pressable>
  );
};
