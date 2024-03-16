import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';

export const BaseLink = ({
  screen,
  params,
  children,
  itemsOrientation = 'row',
  align = 'center',
}: {
  screen: string;
  params?: any;
  children: React.ReactNode;
  itemsOrientation?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  align?: 'flex-start' | 'center' | 'flex-end';
}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate(screen, params);
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
