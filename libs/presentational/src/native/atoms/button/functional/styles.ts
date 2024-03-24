import { COLOR_PALETTE } from '@present-native/styles';
import { StyleSheet } from 'react-native';
const commonButtonStyles = StyleSheet.create({
  bellIconButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: '100%',
    borderRadius: 8,
    backgroundColor: COLOR_PALETTE.white,
    shadowColor: COLOR_PALETTE.zinc,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,

    elevation: 5,
  },
  bellIconButton_innerContainer: {
    position: 'relative',
  },
  bellIconButton_badge: {
    position: 'absolute',
    top: -6,
    right: -8,
    backgroundColor: COLOR_PALETTE.rose,
    width: 16,
    height: 16,
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: COLOR_PALETTE.white,
  },
  bellIconButton_badgeText: {
    color: COLOR_PALETTE.white,
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 10,
  },

  imageButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR_PALETTE.zinc,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  iconTextButton: {
    maxWidth: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: COLOR_PALETTE.white,
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

  answerIconContainer: {
    borderRadius: 30,
    width: 25,
    height: 25,
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { commonButtonStyles };
