import { View } from 'react-native';
import { PaymentMethod, VerticalSpacer } from '@present-native/atoms';
import { IPaymentMethod } from '@business-layer/services/entities';
import { useState } from 'react';

export const ChoosePaymentMethods = ({
  onSelect,
}: {
  onSelect: () => void;
}) => {
  const methods: IPaymentMethod[] = [
    {
      id: 'm1',
      name: 'vnpay',
      logo: 'https://detoivn.sirv.com/payment/vnpay-logo.png',
      title: 'Trực tuyến qua VNPay',
    },
    {
      id: 'm2',
      name: 'momo',
      logo: 'https://detoivn.sirv.com/payment/momo-logo.png',
      title: 'Trực tuyến qua Momo',
    },
    {
      id: 'm3',
      name: 'cod',
      logo: 'https://detoivn.sirv.com/payment/cod-logo.png',
      title: 'Trả tiền mặt sau dịch vụ',
    },
  ];
  const [selectedMethodId, setSelectedMethodId] = useState<string | null>(null);

  const handleSelectMethod = (id: string) => {
    setSelectedMethodId(id);
  };
  return (
    <View>
      {Array.isArray(methods) && methods.length > 0
        ? methods.map((m) => (
            <>
              <VerticalSpacer size="m" />
              <PaymentMethod
                method={m}
                isActive={selectedMethodId === m.id}
                key={m.id}
                onSelect={handleSelectMethod}
              />
            </>
          ))
        : null}
    </View>
  );
};
