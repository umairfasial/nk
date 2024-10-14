import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../shared/themes';

const styles = StyleSheet.create({
  container: {
    width: wp('45%'),
    height: hp('10%'),
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 8,
    backgroundColor: COLORS.sky_blue,
    elevation: 5,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowColor: '#000',
    shadowRadius: 2,
    marginHorizontal: wp('2.6%'),
    marginVertical: hp('1%'),
    overflow: 'hidden',
  },
});

export default styles;
