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
  headView: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: wp('5%'),
    paddingVertical: 10,
  },
  iconsStyle: {
    width: 16,
    height: 16,
    marginHorizontal: wp('3%'),
  },
  containerStyle: {
    borderWidth: 1,
    marginVertical: hp('1%'),
    borderRadius: 4,
    backgroundColor: '#fff',
    borderColor: COLORS.sky_blue,
  },
  contentContainer: {alignItems: 'center', marginTop: hp('10%')},
  textContainerStyle: {
    paddingVertical: hp('1%'),
    marginHorizontal: wp('1%'),
    backgroundColor: '#fff',
    fontFamily: 'Roboto-Regular',
  },
  textInputStyle: {
    paddingVertical: hp('1%'),
    fontSize: 16,
  },
  codeTextStyle: {
    marginHorizontal: wp('-4%'),
  },
  errMsg: {
    fontFamily: 'Roboto-Regular',
    color: 'red',
    alignSelf: 'flex-start',
    marginHorizontal: '10%',
  },
});

export default styles;
