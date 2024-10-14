import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../shared/themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  underContainer: {
    flex: 0.6,
    paddingTop: 2,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    width: wp('90%'),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 0,
  },
  imagebg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  forgotPassTxt: {
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    color: 'rgb(188,188,188)',
  },
  otherLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: hp('5%'),
    alignItems: 'center',
  },
  lineTxt: {
    width: wp('10%'),
    height: hp('0.2%'),
    backgroundColor: 'rgb(226,226,226)',
    marginHorizontal: wp('5%'),
  },
  otherTxt: {
    fontFamily: 'Roboto-Regular',
    color: 'rgb(226,226,226)',
    fontSize: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: hp('1%'),
    alignItems: 'center',
  },
  textView: {flexDirection: 'row', marginTop: hp('2%')},
  belowlineTxt: {
    marginTop: hp('3%'),
    width: wp('60%'),
    height: hp('0.2%'),
    backgroundColor: 'rgb(226,226,226)',
  },
  noMemberTxt: {
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    color: 'rgb(39,39,39)',
  },
  signUpTxt: {
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    color: 'rgb(74,168,197)',
  },
  errMsg: {
    fontFamily: 'Roboto-Regular',
    color: 'red',
    alignSelf: 'flex-start',
    marginHorizontal: '6%',
  },
  borderContainer: {
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingTop: hp('3%'),
  },
  login: {color: COLORS.sky_blue, fontWeight: 'bold'},
});

export default styles;
