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
  contentContainer: {alignItems: 'center', marginTop: hp('10%')},
  image: {width: 200, height: 136},
  completetxt: {
    fontFamily: 'Roboto-Medium',
    fontSize: 56,
    marginTop: hp('2%'),
    color: COLORS.sky_blue,
  },
  indicator: {flex: 1, justifyContent: 'center', marginTop: hp('10%')},
  button: {
    elevation: 5,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  scoreTxt: {
    fontFamily: 'Roboto-Medium',
    fontSize: 26,
    marginTop: hp('10%'),
    color: COLORS.sky_blue,
  },
});

export default styles;
