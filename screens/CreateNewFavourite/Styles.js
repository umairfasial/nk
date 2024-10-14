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
  msgTxt: {
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    color: COLORS.grey,
  },
  underContainer: {
    width: wp('90%'),
    height: hp('75%'),
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: hp('32%'),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 1,
    borderColor: '#4EA2C3',
  },
  belowlineTxt: {
    marginTop: hp('35%'),
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
    marginHorizontal: '10%',
  },
  formView: {marginTop: hp('5%'), alignItems: 'center'},
  imgComp: {alignItems: 'center', marginTop: hp('10%')},
  image: {height: 44, width: 44},
  videotext: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: COLORS.sky_blue,
    marginTop: hp('1%'),
  },
  btnView: {marginTop: hp('30%'), alignItems: 'center'},
  button: {
    elevation: 5,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});

export default styles;
