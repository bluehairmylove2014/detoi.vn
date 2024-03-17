import { baseBtnProps } from './type';
import BaseBtn from './BaseBtn';

export const SecondaryBtn = ({
  title,
  fontSize,
  iconName,
  iconPosition,
  gap,
  radius,
  isFitContent,
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
      backgroundColor="zinc"
      isFitContent={isFitContent}
      border="none"
      alignItems="center"
    />
  );
};
