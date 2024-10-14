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

  textInputStyle: {
    marginVertical: hp('1%'),
    backgroundColor: '#fff',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: 'rgb(188,188,188)',
    width: wp('80%'),
    borderRadius: 4,
  },
});

export default styles;
