import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../shared/themes';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(246,246,246)',
  },
  topView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp('5%'),
    marginTop: hp('5%'),
  },
  headingTxt: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    color: 'rgb(39,39,39)',
    marginHorizontal: wp('1%'),
  },
  centeredView: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  modalView: {
    paddingVertical: hp('5%'),
    width: wp('100%'),
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#707070',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  boxStyle: {
    width: 15,
    height: 15,
  },
  checkBoxView: {
    flexDirection: 'row',
    marginTop: hp('2%'),
    marginHorizontal: wp('2%'),
    alignItems: 'center',
  },
  text: {color: COLORS.basic_black, marginLeft: 10},
  img: {height: 15, width: 15},
  checkView: {
    flexDirection: 'row',
    marginHorizontal: wp('2%'),
    alignItems: 'center',
  },
  imgComp: {height: 15, width: 15, marginLeft: 10},
  button: {alignSelf: 'center', marginTop: hp('2%')},
});

export default styles;
