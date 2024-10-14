import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../shared/themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255,255,255)',
  },
  topView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: wp('5%'),
    marginTop: hp('2%'),
  },
  iconsStyle: {
    width: 14,
    height: 14,
    marginHorizontal: wp('3%'),
    tintColor: COLORS.sky_blue,
  },
  Card: {flexDirection: 'row', alignItems: 'center'},
  back: {marginHorizontal: wp('1%'), color: COLORS.sky_blue},
  Istiqamah: {
    alignSelf: 'center',
    textAlign: 'center',
    margin: '3%',
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.sky_blue,
  },
});

export default styles;
