import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../shared/themes';
import {theme} from '../../shared/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    height: hp('55%'),
    paddingHorizontal: 3.5,
  },
  swiperView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  scrollView: {
    height: hp('90%'),
  },
  gradientBorder: {
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  indicator: {
    position: 'absolute',
    top: '35%',
    alignSelf: 'center',
    zIndex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  modalView: {
    height: hp('60%'),
    width: wp('80%'),
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#707070',
    borderWidth: 2,
    borderColor: 'rgb(74,168,197)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  topicTxt: {
    marginTop: hp('1%'),
    color: COLORS.sky_blue,
    marginHorizontal: wp('6%'),
    fontFamily: 'Roboto-Medium',
  },
  videoContent: {
    height: hp('27%'),
    borderRadius: 20,
    width: '95%',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  video: {
    width: '100%',
    alignSelf: 'center',
  },
  videoText: {
    position: 'absolute',
    fontWeight: 'bold',
    bottom: 20,
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
    alignSelf: 'center',
  },
  modalBtn: {
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: hp('10%'),
  },
  videoWrapper: {
    paddingVertical: 15,
  },
  ilmaBytesView: {
    marginTop: hp('1%'),
    backgroundColor: '#fff',
  },
  ilmaUnderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewAllTxt: {
    fontFamily: 'Roboto-Medium',
    fontSize: 13,
    color: 'rgb(74,168,197)',
    marginRight: wp('10%'),
  },
  topview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginBottom: '2%',
  },
  searchbar: {
    width: wp('81%'),
    marginTop: hp('2.5%'),
    alignSelf: 'center',
  },
  filterview: {
    width: 40,
    height: 40,
    borderColor: COLORS.normal_grey,
    padding: 7,
  },
  textfilter: {marginLeft: '3%', marginTop: '5%'},
  text1: {
    position: 'absolute',
    top: -10,
    color: COLORS.black,
    fontWeight: 'bold',
  },
  filter: {width: '100%', height: '100%'},
  backicon: {marginTop: '2%', marginHorizontal: '3%'},
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    padding: 8,
    margin: '3%',
    borderRadius: 8,
  },
  dot: {
    width: 14,
    height: 14,
    backgroundColor: 'rgb(74,168,197)',
    borderRadius: 10,
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  viewAll: {
    marginBottom: '10%',
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 5,
    borderRadius: 8,
  },
  arrow: {paddingTop: 5, paddingLeft: 15},
  tabView: {
    marginTop: hp('2%'),
    height: '46%',
    backgroundColor: 'transparent',
  },
  tabIndicator: {
    color: 'rgb(74,168,197)',
    backgroundColor: 'rgb(74,168,197)',
  },
  screenOptions: {
    lazy: true,
    tabBarPressColor: 'transparent',
    tabBarActiveTintColor: COLORS.sky_blue,
    tabBarInactiveTintColor: 'rgb(209,209,209)',
    tabBarStyle: {
      marginHorizontal: wp('5%'),
      elevation: 0,
    },
    tabBarIndicatorStyle: {
      backgroundColor: 'rgb(74,168,197)',
      width: wp('30%'),
      marginLeft: wp('7.5%'),
    },
    tabBarOptions: {
      showIcon: true,
    },
  },
  ilmaText: {
    marginLeft: wp('5%'),
    color: COLORS.sky_blue,
    fontWeight: 'bold',
  },
  ilmaAll: {marginRight: wp('10%'), color: COLORS.sky_blue},
  cardModal: {alignSelf: 'center', marginTop: hp('5%')},
  img: {width: 35, height: 42},
  ilmaBytes: {marginLeft: wp('10%'), color: theme.ui.black},
  viewAllIllma: {marginRight: wp('10%'), color: theme.brand.primary},
  IllmaBytes: {flexDirection: 'row', justifyContent: 'space-around'},
  IlmaCardView: {
    alignSelf: 'center',
    marginTop: hp('5%'),
    minHeight: hp('16%'),
  },
  contentIlma: {backgroundColor: 'rgba(0, 0, 0, 0.3)', flex: 1},
});

export default styles;
