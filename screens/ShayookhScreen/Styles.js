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
  search: {
    alignSelf: 'center',
    marginTop: hp('2%'),
    marginBottom: hp('1%'),
  },
  content: {
    marginTop: hp('2%'),
    marginHorizontal: wp('2%'),
  },
});

export default styles;
