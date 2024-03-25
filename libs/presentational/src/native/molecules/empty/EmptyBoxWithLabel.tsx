import { Paragraph } from '@present-native/atoms';
import { View, Text, Image } from 'react-native';
import EmptyIcon from '@assets/empty-box.png';

type props = {
  label?: string;
};
const EmptyBoxWithLabel: React.FC<props> = ({
  label = 'Không có gì ở đây cả',
}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.5,
      }}
    >
      <Image
        source={EmptyIcon}
        style={{
          width: 80,
          height: 80,
        }}
      />
      <Paragraph theme="smallBold" color="black" align="center">
        {label}
      </Paragraph>
    </View>
  );
};

export default EmptyBoxWithLabel;
