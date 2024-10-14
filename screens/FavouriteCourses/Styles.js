import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(246,246,246)',
  },
  topView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp('5%'),
    marginTop: hp('2%'),
  },
  fCoursesTxt: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    color: 'rgb(39,39,39)',
    marginHorizontal: wp('1%'),
  },
  underTop: {
    flexDirection: 'row',
    marginTop: hp('2%'),
    marginHorizontal: wp('5%'),
    alignItems: 'center',
  },
  flex: {flexDirection: 'row', alignItems: 'center'},
});

export default styles;
