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
  contentContainer: {alignSelf: 'center', marginTop: hp('2%')},
  list: {
    marginTop: hp('2%'),
    flex: 1,
    alignSelf: 'center',
  },
});

export default styles;
