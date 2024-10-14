import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../shared/themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(246,246,246)',
    width: wp('70%'),
    flexDirection: 'row',
    paddingVertical: 2,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  iconStyle: {
    marginHorizontal: wp('3%'),
  },
  inputStyle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    color: COLORS.basic_black,
    flex: 1,
    paddingVertical: 5,
  },
});

export default styles;
