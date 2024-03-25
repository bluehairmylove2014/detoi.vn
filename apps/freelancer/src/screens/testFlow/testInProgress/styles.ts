import { COLOR_PALETTE } from '@present-native/styles';
import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '@constants/dimension';

const TestInProgressStyle = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    padding: 20,
    backgroundColor: COLOR_PALETTE.soft,
  },

  questionContainer: {
    borderRadius: 10,
    backgroundColor: COLOR_PALETTE.white,
    paddingHorizontal: 25,
    paddingVertical: 20,
  },

  questionPointContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  answerBtn: {
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 12,
    borderColor: COLOR_PALETTE.gray,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export { TestInProgressStyle };
