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
  viewAllTxt: {
    fontFamily: 'Roboto-Medium',
    fontSize: 13,
    color: 'rgb(74,168,197)',
    fontWeight: 'bold',
  },
  ilmaBytesTxt: {
    fontSize: 16,
    color: 'rgb(39,39,39)',
  },
  namazContainer: {
    marginHorizontal: wp('5%'),
    height: hp('30%'),
    width: wp('90%'),
    backgroundColor: '#fff',
    borderRadius: 4,
    elevation: 5,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  undernamazContainer: {
    justifyContent: 'space-between',
    marginHorizontal: wp('6%'),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('1%'),
  },
  iconChecked: {
    height: 25,
    width: 25,
    marginLeft: hp('17%'),
    marginTop: hp('0.5'),
  },
  lineTxt: {
    width: wp('80%'),
    height: hp('0.1%'),
    backgroundColor: COLORS.grey,
    marginHorizontal: wp('5%'),
  },
  viewDetailsTxt: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: 'rgb(74,168,197)',
  },
});

export default styles;
