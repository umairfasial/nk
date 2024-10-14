import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../shared/themes';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp('90%'),
    paddingVertical: 10,
    marginBottom: hp('0.3%'),
    borderBottomWidth: 0.5,
    paddingBottom: 12,
    borderColor: COLORS.grey,
  },
  question: {color: COLORS.sky_blue, fontSize: 15, fontWeight: 'bold'},
  textView: {flexDirection: 'row', alignItems: 'center'},
});

export default styles;
