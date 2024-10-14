import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(246,246,246)',
    width: wp('45%'),
    height: hp('12'),
    marginVertical: hp('1%'),
    marginHorizontal: wp('2%'),
    flexDirection: 'row',
    borderRadius: 4,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  videoContent: {
    width: wp('45%'),
    height: hp('12%'),
    overflow: 'hidden',
    borderRadius: 4,
    borderWidth: 1,
  },
});

export default styles;
