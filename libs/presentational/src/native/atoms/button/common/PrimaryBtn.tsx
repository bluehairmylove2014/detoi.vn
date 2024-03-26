import { baseBtnProps } from './type';
import BaseBtn from './BaseBtn';

export const PrimaryBtn = ({
  title,
  fontSize,
  iconName,
  iconPosition,
  gap,
  radius,
  isFitContent,
  disabled,
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
      isFitContent={isFitContent}
      border="none"
      disabled={disabled}
      alignItems="center"
    />
  );
};
