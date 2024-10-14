import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {theme} from '../../shared/theme';
import {COLORS} from '../../shared/themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(246,246,246)',
  },
  topView: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: wp('3%'),
    marginTop: hp('2%'),
  },
  headingTxt: {
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    color: COLORS.sky_blue,
    marginHorizontal: wp('1%'),
  },
  underTop: {
    flexDirection: 'row',
    marginTop: hp('2%'),
    alignItems: 'center',
    alignSelf: 'center',
  },
  heartIconCount: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: theme.ui.white,
    width: 15,
    height: 15,
    borderRadius: 10,
    shadowColor: theme.ui.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  heartCountText: {
    fontSize: 10,
    color: theme.brand.primary,
    lineHeight: 15,
    textAlign: 'center',
  },
  listRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginVertical: '2%',
    marginHorizontal: '0.5%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 5,
  },
  title: {
    color: COLORS.basic_black,
    fontSize: 15,
    width: wp('68%'),
    fontWeight: 'bold',
  },
  contentContainer: {marginVertical: hp('2%'), alignItems: 'center'},
});

export default styles;
