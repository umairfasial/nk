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

  textInputStyle: {
    marginVertical: hp('1%'),
    backgroundColor: '#fff',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: COLORS.basic_black,
    width: wp('80%'),
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 4,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
});

export default styles;
