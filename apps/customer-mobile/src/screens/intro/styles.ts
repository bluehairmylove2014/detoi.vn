import { StyleSheet } from "react-native";
import { colors, screenHorizontalPadding, screenVerticalPadding } from '@present-native/styles';

export const introSCreenStyle = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: '100%',
    height: 'auto',
    backgroundColor: colors.secondary,
    paddingVertical: screenVerticalPadding,
    paddingHorizontal: screenHorizontalPadding,
  },
  welcomeSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 10,
    flex: 1,
  },
  buttonLoginSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 10,
  },
  introPolicySection: {
    marginVertical: 35,
    display: 'flex',
    flexDirection: 'row',
    flexWrap:'wrap'
  },
});
