import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  buttonLogin: {
    width: wp('80%'),
    paddingVertical: 15,
    backgroundColor: '#033C59',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp('1.5%'),
    borderColor: 'transparent',
    borderWidth: 1,
  },
  logInTxt: {
    fontFamily: 'Roboto-Medium',
    color: '#fff',
    fontSize: 20,
  },
});

export default styles;
