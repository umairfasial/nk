import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLORS } from '../../shared/themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  underContainer: {
    width: wp('90%'),
    paddingVertical: 35,
    backgroundColor: '#fff',
    alignSelf: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 1,
    borderTopColor: 'transparent',
    borderColor: '#4EA2C3',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  innerRow: {
    flexDirection: 'row',
    marginTop: hp('5%'),
    justifyContent: 'space-between',
  },
  cameraIcon: {
    alignSelf: 'flex-end',
    marginLeft: -25,
    borderWidth: 1,
    borderColor: COLORS.white,
    padding: 4,
    backgroundColor: COLORS.sky_blue,
    borderRadius: 15,
  },
  imageView: {
    height: 90,
    width: 90,
    borderRadius: 45,
    borderColor: '#4EA2C3',
    borderWidth: 1,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
  nameTxt: {
    marginTop: hp('1%'),
    color: COLORS.sky_blue,
  },
  mailTxt: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: COLORS.sky_blue,
  },
  optionView: {
    width: wp('12%'),
    backgroundColor: 'rgb(241,249,252)',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionsStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('3%'),
    backgroundColor: '#fff',
    borderWidth: 0,
    width: wp('80%'),
    borderRadius: 4,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  optionContainer: {
    width: wp('12%'),
    backgroundColor: 'rgb(241,249,252)',
    height: Platform.OS == 'ios' ? wp('13%') : wp('11%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    height: 20,
    width: 18,
  },
  headingsStyle: {
    marginHorizontal: wp('3%'),
    color: COLORS.sky_blue,
  },
  image: { height: 20, width: 18, tintColor: COLORS.sky_blue },


  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 18,
  },
  cancelButton: {
    backgroundColor: '#FFF',
    borderColor: '#007AFF',
    borderWidth: 1,
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#007AFF',
    fontSize: 18,
  },
});

export default styles;
