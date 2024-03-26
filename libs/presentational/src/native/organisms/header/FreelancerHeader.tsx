import { ActivityIndicator, SafeAreaView, View } from 'react-native';
import { freelancerHeaderStyles } from './styles';
import {
  BellIconButton,
  CircleImage,
  Paragraph,
  Title,
  VerticalSpacer,
} from '@present-native/atoms';
import { IFreelancerPreview } from '@business-layer/services/entities';

type props = {
  freelancerPreviewData: IFreelancerPreview | undefined;
};
export const FreelancerHeader: React.FC<props> = ({
  freelancerPreviewData,
}) => {
  return (
    <SafeAreaView style={{ flex: 1, marginBottom: 20 }}>
      <View style={freelancerHeaderStyles.container}>
        {freelancerPreviewData ? (
          <>
            <View style={freelancerHeaderStyles.nameView}>
              <Paragraph theme="smallRegular" color="black">
                Chào buổi sáng! 👋
              </Paragraph>
              <Title theme="baseBold" color="black">
                Phan Dương Minh
              </Title>
            </View>
            <View style={freelancerHeaderStyles.avatarView}>
              <BellIconButton notificationCount={0} theme="none" />
              <View style={freelancerHeaderStyles.avatarWrapper}>
                <CircleImage
                  source={{
                    uri: 'https://detoivn.sirv.com/freelancer/avatars/f1.png',
                  }}
                />
              </View>
            </View>
          </>
        ) : (
          <ActivityIndicator />
        )}
      </View>
    </SafeAreaView>
  );
};
