import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../shared/themes';
import {theme} from '../../shared/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardContainer: {
    marginHorizontal: wp('10%'),
    marginTop: hp('3%'),
  },
  contentContainer: {flexDirection: 'row', alignItems: 'center'},
  imageStyle: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  list: {flex: 1, marginBottom: hp('7%')},
  imageView: {height: 30, width: 30},
  userNameTxt: {
    marginLeft: wp('3%'),
  },
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
    bottom: 0,
    marginTop: hp('2%'),
    backgroundColor: 'rgb(249,249,249)',
    width: wp('80%'),
    paddingVertical: hp('1.5%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 19,
  },

  modalReplyView: {
    alignSelf: 'center',
    marginTop: hp('2%'),
    backgroundColor: 'rgb(249,249,249)',
    width: wp('90%'),
    paddingVertical: hp('7.5%'),
    borderRadius: 19,
  },
  textInput: {
    position: 'absolute',
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
  name: {color: theme.ui.black, marginLeft: wp('3%')},
  lineView: {
    width: wp('80%'),
    backgroundColor: COLORS.grey,
    height: 1,
    marginTop: hp('1%'),
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  modalView: {
    bottom: 0,
    height: hp('30%'),
    width: wp('100%'),
    backgroundColor: 'white',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    shadowColor: '#707070',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  card: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: hp('1%'),
    alignItems: 'center',
  },
});

export default styles;
