import { StyleSheet } from 'react-native';
import { COLOR_PALETTE } from '@styles/color';

export const ServiceCardSectionStyle = StyleSheet.create({
  card: {
    backgroundColor: COLOR_PALETTE.soft,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    gap: 7,
    borderRadius: 5,
  },

  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
});
export const freelancerCardOrderStyles = StyleSheet.create({
  container: {
    height: 200,
    width:"92%",
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


export const freelancerCardAuctionStyles = StyleSheet.create({
  container: {
    height:200,
    width:"92%",
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