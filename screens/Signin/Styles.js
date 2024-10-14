import {Dimensions, StyleSheet} from 'react-native';
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
    paddingTop: 2,
    position: 'absolute',
    bottom: 0,
    flex: 1,
    width: wp('90%'),
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 0,
  },
  forgotPassTxt: {
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    color: 'rgb(188,188,188)',
  },
  otherLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: hp('10%'),
    alignItems: 'center',
  },
  lineTxt: {
    width: wp('10%'),
    height: hp('0.2%'),
    backgroundColor: 'rgb(226,226,226)',
    marginHorizontal: wp('5%'),
  },
  borderContainer: {
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingTop: hp('8%'),
    height: Dimensions.get('window').height / 2,
  },
  otherTxt: {
    fontFamily: 'Roboto-Regular',
    color: 'rgb(226,226,226)',
    fontSize: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: hp('2%'),
    alignItems: 'center',
  },
  belowlineTxt: {
    marginTop: hp('3%'),
    width: wp('60%'),
    height: hp('0.2%'),
    backgroundColor: 'rgb(226,226,226)',
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
  textView: {flexDirection: 'row', marginTop: hp('2%')},
  signup: {color: COLORS.sky_blue, fontWeight: 'bold'},
});

export default styles;
