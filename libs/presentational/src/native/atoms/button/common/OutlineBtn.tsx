import { baseBtnProps } from './type';
import BaseBtn from './BaseBtn';

export const OutlineBtn = ({
  title,
  color,
  fontSize,
  iconName,
  iconPosition,
  gap,
  radius,
  borderColor,
  onPress,
}: Omit<baseBtnProps, 'backgroundColor' | 'alignItems' | 'border'>) => {
  return (
    <BaseBtn
      title={title}
      fontSize={fontSize}
      iconName={iconName}
      iconPosition={iconPosition}
      gap={gap}
      radius={radius}
      onPress={onPress}
      color={color}
      backgroundColor="transparent"
      border="solid"
      borderColor={borderColor}
      alignItems="center"
    />
  );
};
