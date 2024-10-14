import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../shared/themes';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255,255,255)',
  },
  topView: {
    width: wp('100%'),
    backgroundColor: 'rgb(255,255,255)',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  contentContainer: {flexDirection: 'row', alignItems: 'center'},
  headView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: wp('5%'),
    paddingVertical: 10,
  },
  iconsStyle: {
    width: 12,
    height: 12,
    marginHorizontal: wp('3%'),
  },
  preparedTxt: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    color: COLORS.sky_blue,
    marginTop: hp('2%'),
  },
  decpLineTxt: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: COLORS.basic_black,
    marginTop: hp('1%'),
  },
  qNoTxt: {
    fontFamily: 'Roboto-Medium',
    color: COLORS.basic_black,
  },
  progressBar: {
    width: wp('70%'),
    alignSelf: 'center',
    marginTop: hp('1%'),
  },
  questionTxt: {
    marginTop: hp('3%'),
    color: '#000',
  },
  answerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp('0.5%'),
    backgroundColor: '#fff',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: 'rgb(188,188,188)',
    width: wp('70%'),
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  answerOptions: {
    marginHorizontal: wp('2%'),
    color: COLORS.basic_black,
  },
  outerCircle: {
    padding: 0,
  },
  checkBox: {
    padding: 0,
    borderWidth: 1,
    borderColor: COLORS.grey,
    borderRadius: 20,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  quizView: {
    marginLeft: wp('3%'),
    paddingBottom: 15,
    marginTop: hp('1%'),
  },
  title: {
    fontFamily: 'Roboto-Regular',
    color: COLORS.black,
  },
  cardContainer: {
    marginTop: hp('5%'),
    marginHorizontal: wp('12%'),
  },
  questionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  assessment: {
    marginTop: hp('3%'),
    paddingHorizontal: wp('1%'),
    overflow: 'hidden',
  },
  buttonView: {
    marginTop: hp('8%'),
    alignItems: 'center',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: COLORS.white,
    elevation: 5,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  imageView: {alignItems: 'center', marginTop: hp('15%'), flex: 1},
  image: {width: 177, height: 140},
  questions: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: hp('25%'),
  },
  questiontext: {color: COLORS.basic_black, fontSize: 20},
});

export default styles;
