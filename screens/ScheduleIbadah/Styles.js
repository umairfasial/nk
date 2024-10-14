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
  contentContainer: {marginHorizontal: wp('10%'), marginTop: hp('2%')},
  topView: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: wp('5%'),
    marginTop: hp('2%'),
  },
  pickerStyle: {
    marginVertical: hp('1%'),
    backgroundColor: '#fff',
    borderWidth: 0,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: 'rgb(188,188,188)',
    width: wp('80%'),
    paddingVertical: 15,
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
    marginTop: hp('1%'),
    marginLeft: wp('2%'),
    color: COLORS.sky_blue,
  },
  input: {width: wp('80%'), alignSelf: 'center'},
  dropdownView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdown: {
    height: hp('10%'),
    backgroundColor: theme.ui.gray3,
    width: wp('35%'),
  },
  endtime: {width: 10, backgroundColor: theme.ui.gray2, height: 1},
  button: {
    elevation: 5,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});

export default styles;
