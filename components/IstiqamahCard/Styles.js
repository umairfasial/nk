import {StyleSheet, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../shared/themes';

const styles = StyleSheet.create({
  undernamazContainer: {
    marginHorizontal: wp('6%'),
    marginTop: hp('1%'),
  },
  iconChecked: {
    height: 30,
    width: 30,
    marginTop: hp('0.5'),
  },
  lineTxt: {
    width: wp('80%'),
    height: hp('0.1%'),
    backgroundColor: COLORS.grey,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: wp('1%'),
  },
});

export default styles;
