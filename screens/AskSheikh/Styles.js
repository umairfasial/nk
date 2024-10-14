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
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: wp('2%'),
    marginTop: hp('2%'),
  },
  contentContainer: {
    flex: 1,
    width: wp('100%'),
    alignSelf: 'center',
  },
  iconsStyle: {
    width: 14,
    height: 14,
    marginHorizontal: wp('3%'),
  },
  indicator: {
    color: COLORS.sky_blue,
    backgroundColor: 'rgb(74,168,197)',
  },
  screens: {
    tabBarActiveTintColor: COLORS.sky_blue,
    tabBarInactiveTintColor: 'rgb(209,209,209)',
    tabBarStyle: {
      marginHorizontal: wp('5%'),
      elevation: 0,
      backgroundColor: 'transparent',
    },
    tabBarIndicatorStyle: {
      backgroundColor: 'rgb(74,168,197)',
      width: wp('30%'),
      marginLeft: wp('7.5%'),
    },
  },
});

export default styles;
