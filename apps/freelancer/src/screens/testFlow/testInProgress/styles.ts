import { COLOR_PALETTE, screenVerticalPadding } from '@present-native/styles';
import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '@constants/dimension';

const TestInProgressStyle = StyleSheet.create({
  safeAreaContainer: {
    backgroundColor: COLOR_PALETTE.soft,
    height: windowHeight,
  },

  container: {
    width: windowWidth,
    height: '100%',
    paddingVertical: screenVerticalPadding,
    paddingHorizontal: 20,
  },

  questionContainer: {
    borderRadius: 10,
    backgroundColor: COLOR_PALETTE.white,
    padding: 25,
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
