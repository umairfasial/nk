import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, constStyles} from '../../shared/themes';

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    width: wp('90%'),
    marginVertical: hp('0.5%'),
    marginHorizontal: hp('0.1%'),
    flexDirection: 'row',
    borderRadius: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp('2%'),
    paddingHorizontal: hp('2%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconStyle: {
    width: 22,
    height: 22,
    tintColor: '#0D4460',
  },
  courceNameTxt: {
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    color: COLORS.basic_black,
    marginLeft: 20,
  },
  androidBorder: {
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.2)',
  },
  imageView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {width: '88%', color: COLORS.sky_blue},
});

export default styles;
