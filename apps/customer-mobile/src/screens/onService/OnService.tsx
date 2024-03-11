import CustomerTemplate from '@present-native/templates/CustomerTemplate';
import { OnServiceProps } from '../../config';
import { View } from 'react-native';
import { onServiceScreenStyle } from './styles';
import { Paragraph } from '@present-native/atoms';

const OnService: React.FC<OnServiceProps> = ({ route, navigation }) => {
  const statuses = [
    { icon: '', title: 'Chưa đến giờ hoạt động' },
    { icon: '', title: 'Đang di chuyển, hãy kiên nhẫn' },
    { icon: '', title: 'Đang làm việc' },
    { icon: '', title: 'Đã hoàn thành dịch vụ' },
  ];
  return (
    <CustomerTemplate>
      <View style={onServiceScreenStyle.container}>
        <Paragraph color="primary" theme="baseBold">
          Các lưu ý chung cho dịch vụ
        </Paragraph>
      </View>
    </CustomerTemplate>
  );
};
export default OnService;
