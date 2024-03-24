import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';
import { useAuthNavigation } from '@business-layer/business-logic/non-service-lib/navigation';

export const BaseLink = ({
  screen,
  stack,
  params,
  children,
  itemsOrientation = 'row',
  align = 'center',
}: {
  screen: string;
  stack?: string;
  params?: any;
  children: React.ReactNode;
  itemsOrientation?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  align?: 'flex-start' | 'center' | 'flex-end';
}) => {
  const navigation = useNavigation();
  const { navigateToScreenInSameStack, navigateToScreenInDifferentStack } =
    useAuthNavigation();
  return (
    <Pressable
      onPress={() => {
        stack
          ? navigateToScreenInDifferentStack(stack, screen, { params })
          : navigateToScreenInSameStack(screen, { params });
      }}
      style={{
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: itemsOrientation,
        alignItems: 'center',
        justifyContent: align,
      }}
    >
      {children}
    </Pressable>
  );
};
