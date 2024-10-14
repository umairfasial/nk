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
  nametxt: {
    marginHorizontal: wp('2%'),
  },
  text14: {marginHorizontal: wp('7%'), marginTop: hp('2%')},
  imageStyle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginHorizontal: wp('2%'),
  },
  flex: {flexDirection: 'row', alignItems: 'center'},
  cardContainer: {
    marginHorizontal: wp('15%'),
    marginTop: hp('3%'),
  },
  imageStyle: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  userNameTxt: {
    marginLeft: wp('3%'),
  },
  imgView: {height: 30, width: 30},
  questionTxt: {
    color: COLORS.basic_black,
    marginTop: hp('1%'),
  },
  answerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  replyView: {
    marginTop: hp('1%'),
    backgroundColor: 'rgb(249,249,249)',
    width: wp('80%'),
    height: hp('4.5'),
    borderRadius: 19,
  },
  textInput: {
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    color: 'rgb(188,188,188)',
    flex: 1,
    marginHorizontal: wp('5%'),
  },
  viewAnswer: {
    fontFamily: 'Roboto-Medium',
    fontSize: 13,
    color: COLORS.sky_blue,
  },
  answerNumberView: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: hp('1%'),
    alignItems: 'center',
  },
  lineView: {
    width: wp('70%'),
    backgroundColor: COLORS.grey,
    height: 1,
    marginTop: hp('3%'),
  },
  name: {color: COLORS.basic_black, marginLeft: wp('3%')},
  inputView: {
    width: wp('70%'),
    backgroundColor: COLORS.lightGrey,
    paddingVertical: 10,
    borderRadius: 19,
    alignSelf: 'center',
    marginTop: hp('2%'),
  },
});

export default styles;
