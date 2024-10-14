import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../shared/themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(246,246,246)',
  },
  underContainer: {
    width: wp('100%'),
    backgroundColor: COLORS.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopColor: 'transparent',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    marginHorizontal: wp('5%'),
    marginTop: hp('2%'),
    justifyContent: 'space-between',
    width: wp('90%'),
  },
  contentContainer: {alignItems: 'center', paddingHorizontal: 15},
  border: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  iconView: {
    height: 27,
    width: 27,
    alignItems: 'center',
    backgroundColor: COLORS.lightGrey,
    justifyContent: 'center',
    borderRadius: 13,
  },
  infoTxt: {
    color: COLORS.sky_blue,
  },
  imageView: {marginTop: hp('-3%'), height: 130, width: 130},
  lineView: {
    width: wp('100%'),
    backgroundColor: 'rgb(255,255,255)',
    height: 2,
    marginTop: hp('1.5%'),
  },
  arrow: {width: 10, height: 10},
  image: {height: 130, width: 130},
  name: {marginTop: hp('3%'), color: COLORS.sky_blue},
  field: {marginHorizontal: wp('10%'), marginTop: hp('2%')},
});

export default styles;
