import { baseBtnProps } from './type';
import BaseBtn from './BaseBtn';

export const PrimaryBtn = ({
  title,
  fontSize,
  iconName,
  iconPosition,
  gap,
  radius,
  onPress,
}: Omit<
  baseBtnProps,
  'color' | 'backgroundColor' | 'alignItems' | 'border'
>) => {
  return (
    <BaseBtn
      title={title}
      fontSize={fontSize}
      iconName={iconName}
      iconPosition={iconPosition}
      gap={gap}
      radius={radius}
      onPress={onPress}
      color="black"
      backgroundColor="secondary"
      border="none"
      alignItems="center"
    />
  );
};
