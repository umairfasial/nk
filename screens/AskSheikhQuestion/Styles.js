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
  contentContainer: {marginHorizontal: wp('10%'), marginTop: hp('2%')},
  topView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: wp('5%'),
    marginTop: hp('2%'),
  },
  title: {
    color: COLORS.sky_blue,
    fontSize: 16,
    fontWeight: 'bold',
  },
  sheikhtext: {
    color: COLORS.sky_blue,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    marginHorizontal: wp('2%'),
    textAlignVertical: 'top',
    marginTop: hp('1%'),
  },
  button: {
    elevation: 5,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  askSheikhTxt: {
    marginHorizontal: wp('1%'),
    color: COLORS.sky_blue,
  },
  iconsStyle: {
    width: 18,
    height: 20,
    marginHorizontal: wp('3%'),
  },
  pickerStyle: {
    marginVertical: hp('1%'),
    backgroundColor: '#fff',
    borderWidth: 0,
    flexGrow: 1,
    flexDirection: 'row',
    paddingVertical: hp('1.6%'),
    paddingHorizontal: 15,
    borderRadius: 4,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  questionTxt: {
    width: wp('80%'),
    height: hp('15%'),
    borderRadius: 4,
    backgroundColor: '#fff',
    elevation: 5,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    alignItems: 'flex-start',
    marginVertical: hp('1%'),
  },
  descriptionTxt: {
    width: wp('80%'),
    height: hp('27%'),
    borderRadius: 4,
    backgroundColor: '#fff',
    elevation: 5,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    alignItems: 'flex-start',
    marginVertical: hp('1%'),
  },
  topicModalTitle: {
    color: COLORS.sky_blue,
    paddingHorizontal: 10,
  },
  topicModalHeaderStyle: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: 15,
  },
  topicModalHeaderContainerStyle: {
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 15,
    paddingBottom: 15,
    paddingLeft: 10,
  },
  topicHeadercloseBtnIcon: {
    transform: [{skewX: '22deg'}, {skewY: '-35deg'}],
    resizeMode: 'contain',
    width: 20,
    height: 20,
  },
  topicModal: {
    flex: 1,
  },
  modal: {
    marginTop: hp('2%'),
    marginHorizontal: wp('2%'),
  },
});

export default styles;
