import { StyleSheet } from 'react-native';

export const matchingInfoSectionStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  ava_image: {
    width: 35,
    height: 35,
    flex: 2.5,
    display: 'flex',
    justifyContent: 'center',
  },

  service_info: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 1.5,
    flex: 9,
  },

  cancel_button: {
    flex: 5,
  },
});
