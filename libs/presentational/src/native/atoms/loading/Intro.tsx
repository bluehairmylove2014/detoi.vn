import { View, Text } from 'react-native';
import Sound from 'react-native-sound';

Sound.setCategory('Playback');

const Intro = () => {
  const whoosh = new Sound('whoosh.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log(
      'duration in seconds: ' +
        whoosh.getDuration() +
        'number of channels: ' +
        whoosh.getNumberOfChannels()
    );

    // Play the sound with an onEnd callback
    whoosh.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  });
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>intro</Text>
    </View>
  );
};
export { Intro };
