import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../shared/themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGrey,
  },
  topView: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: wp('5%'),
    marginTop: hp('2%'),
  },
  headingTxt: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    color: 'rgb(39,39,39)',
    marginHorizontal: wp('1%'),
  },
  ilmaText: {color: 'rgb(39,39,39)', marginHorizontal: wp('1%')},
  search: {
    width: wp('80%'),
    marginTop: hp('2.5%'),
    alignSelf: 'center',
  },
});

export default styles;
