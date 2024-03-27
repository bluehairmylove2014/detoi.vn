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

export const previewCardOrderStyles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 15,
    backgroundColor: COLOR_PALETTE.softBg,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    position: 'relative',
  },
  orderImageWrapper: {
    width: 70,
  },
  orderNameView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderDetailContainer: {
    flexGrow: 1,
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  orderLineDetailView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  linkButtonWrapper: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 40,
  },
});
