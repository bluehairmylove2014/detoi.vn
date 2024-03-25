import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';
import { useAuthNavigation } from '@business-layer/business-logic/non-service-lib/navigation';
import { customerScreensList } from '@constants/customerScreens';
import { freelancerScreensList } from '@constants/freelancerScreens';
import { customerStacksList } from '@constants/customerStacks';
import { freelancerStacksList } from '@constants/freelancerStacks';

export const BaseLink = ({
  screen,
  stack,
  params,
  children,
  itemsOrientation = 'row',
  align = 'center',
}: {
  screen: keyof customerScreensList | keyof freelancerScreensList;
  stack?: keyof customerStacksList | keyof freelancerStacksList;
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
        width: 'auto',
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
