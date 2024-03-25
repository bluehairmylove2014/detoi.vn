import { StyleSheet } from 'react-native';

const freelancerCardOrderStyles = StyleSheet.create({
  container: {
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  marginView: {
    width: '100%',
    height: '30%',
  },
  topTextView: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  bottomTextView: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 10,
    paddingHorizontal: 10,
    gap: 30,
  },
});

export { freelancerCardOrderStyles };
