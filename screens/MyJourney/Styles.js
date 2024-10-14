import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../shared/themes';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  boxView: {
    width: wp('90%'),
    backgroundColor: COLORS.lightGrey,
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  topView: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: wp('3%'),
    marginTop: hp('2%'),
  },
  journey: {
    marginHorizontal: wp('2%'),
    color: COLORS.sky_blue,
  },
  text: {color: COLORS.sky_blue, marginTop: hp('1%')},
  image: {width: 140, height: 100, marginTop: hp('5%')},
  indicator: {
    flex: 1,
    justifyContent: 'center',
    marginVertical: hp('5%'),
  },
  circle: {
    alignSelf: 'center',
    marginTop: '15%',
  },
});

export default styles;
