import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  videoContent: {
    width: wp('100%'),
    height: hp('30%'),
  },
  screenOptions: {
    tabBarActiveTintColor: 'rgb(74,168,197)',
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
  indicator: {
    color: 'rgb(74,168,197)',
    backgroundColor: 'rgb(74,168,197)',
  },
});

export default styles;
