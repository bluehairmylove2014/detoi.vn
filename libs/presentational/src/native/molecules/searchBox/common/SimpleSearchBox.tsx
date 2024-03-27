import { COLOR_PALETTE } from '@present-native/styles';
import { View, TextInput } from 'react-native';
import { debounce } from '@business-layer/business-logic/helper';
import { FAIcon } from '@present-native/atoms';
import { useState } from 'react';

type props = {
  baseColor?: keyof typeof COLOR_PALETTE;
  placeholder?: string;
  onChange: (value: string) => void;
};
export const SimpleSearchBox: React.FC<props> = ({
  baseColor = 'primary',
  placeholder = 'Tìm kiếm...',
  onChange,
}) => {
  const [isFocusing, setIsFocusing] = useState<boolean>(false);
  return (
    <View
      style={{
        width: '100%',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        opacity: isFocusing ? 1 : 0.7,
      }}
    >
      <FAIcon
        iconName="faMagnifyingGlass"
        color={COLOR_PALETTE[baseColor]}
        size={14}
        style={{ position: 'absolute', top: 18, left: 0 }}
      />
      <TextInput
        editable
        multiline={false}
        onChangeText={debounce((text) => onChange(text), 500)}
        placeholder={placeholder}
        onFocus={() => setIsFocusing(true)}
        onBlur={() => setIsFocusing(false)}
        placeholderTextColor={COLOR_PALETTE[baseColor]}
        style={{
          paddingLeft: 20,
          width: '100%',
          color: COLOR_PALETTE[baseColor],
          borderBottomWidth: 1,
          borderBottomColor: COLOR_PALETTE[baseColor],
        }}
      />
    </View>
  );
};
