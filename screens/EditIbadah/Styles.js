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
  editTxt: {
    fontFamily: 'Roboto-Regular',
    color: 'rgb(39,39,39)',
    marginHorizontal: wp('1%'),
  },
  pickerStyle: {
    marginVertical: hp('1%'),
    backgroundColor: '#fff',
    borderWidth: 0,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: 'rgb(188,188,188)',
    width: wp('80%'),
    height: hp('6%'),
    paddingHorizontal: 15,
    borderRadius: 4,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },

  notificationStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('3%'),
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderWidth: 0,
    width: wp('80%'),
    height: hp('6%'),
    paddingHorizontal: 15,
    borderRadius: 4,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  notificationTxt: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: 'rgb(188,188,188)',
  },
  timeTxt: {
    marginTop: hp('3%'),
    marginLeft: wp('5%'),
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    color: COLORS.basic_black,
  },
  formView: {marginHorizontal: wp('10%'), marginTop: hp('2%')},
  button: {
    elevation: 5,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});

export default styles;
