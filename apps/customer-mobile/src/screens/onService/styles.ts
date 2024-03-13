import { colors } from '@present-native/styles';
import { StyleSheet } from 'react-native';

export const onServiceScreenStyle = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: '100%',
    height: 'auto',
    padding: 20,
  },

  noteContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  billContainer: {
    borderRadius: 20,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
    padding: 20,
    backgroundColor: colors.white,
  },

  infoBillContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15,
    borderBottomColor: colors.zinc,
    borderBottomWidth: 1,
  },

  infoEmployee: {
    flexDirection: 'row',
  },

  avatarContainer: {
    width: 60,
  },

  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  mapStyle: {
    flex: 1,
  },
});
