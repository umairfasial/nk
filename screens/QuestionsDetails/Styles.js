import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {theme} from '../../shared/theme';
import {COLORS} from '../../shared/themes';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  topView: {
    width: wp('100%'),
    backgroundColor: COLORS.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 2,
    borderColor: COLORS.sky_blue,
    borderTopColor: 'transparent',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  headView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: wp('5%'),
    paddingVertical: 10,
  },
  iconsStyle: {
    width: 16,
    height: 18,
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
    // height: hp('15%'),
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
    // height: hp('25%'),
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
    color: theme.ui.black,
    paddingHorizontal: 10,
    marginTop: 27,
    marginBottom: 17,
  },
  topicModalHeaderStyle: {
    marginTop: -10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  topicModalHeaderContainerStyle: {
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19,
    flexDirection: 'row',
    alignItems: 'center',
  },
  topicHeadercloseBtn: {
    position: 'absolute',
    right: 20,
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
});

export default styles;
