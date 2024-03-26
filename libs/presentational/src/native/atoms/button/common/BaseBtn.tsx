import { TouchableOpacity } from 'react-native';
import { baseBtnProps } from './type';
import { FAIcon } from '@present-native/atoms/icon';
import { Paragraph } from '@present-native/atoms/text';
import { baseBtnStyles, borderBtnStyles, radiusBtnStyles } from './styles';
import { btnBackgroundColors, btnChildColors } from '@present-native/styles';
import { fontSizeBtnConfig } from './config';

const BaseBtn = ({
  title,
  fontSize = 'medium',
  iconName,
  iconPosition = 'left',
  gap = 5,
  color,
  backgroundColor = 'secondary',
  alignItems = 'center',
  border = 'none',
  borderColor,
  radius = 'square',
  disabled,
  isFitContent,
  onPress,
}: baseBtnProps) => {
  const titleJsx =
    title.length > 0 ? (
      <Paragraph
        lineNumber={1}
        theme={fontSizeBtnConfig[fontSize].text}
        color={color}
      >
        {title}
      </Paragraph>
    ) : (
      <></>
    );
  const iconJsx = iconName ? (
    <FAIcon
      iconName={iconName}
      color={btnChildColors[color]}
      size={fontSizeBtnConfig[fontSize].icon}
    />
  ) : (
    <></>
  );

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.5}
      style={[
        baseBtnStyles.btn,
        radiusBtnStyles[radius],
        borderBtnStyles[border],
        {
          backgroundColor:
            btnBackgroundColors[disabled ? 'zinc' : backgroundColor],
          justifyContent: alignItems,
          gap,
          paddingHorizontal: fontSizeBtnConfig[fontSize].paddingHorizontal,
          paddingVertical: fontSizeBtnConfig[fontSize].paddingVertical,
          borderColor: borderColor
            ? btnChildColors[borderColor]
            : 'transparent',
        },
        isFitContent
          ? {
              width: 'auto',
              paddingHorizontal: 20,
            }
          : {},
      ]}
      onPress={onPress}
    >
      {iconPosition === 'left' ? (
        <>
          {iconJsx}
          {titleJsx}
        </>
      ) : (
        <>
          {titleJsx}
          {iconJsx}
        </>
      )}
    </TouchableOpacity>
  );
};

export default BaseBtn;
