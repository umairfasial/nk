import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../shared/themes';

const styles = StyleSheet.create({
  container: {
    width: wp('45%'),
    paddingBottom: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 5,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowColor: '#000',
    shadowRadius: 2,
    marginHorizontal: wp('2.6%'),
    marginVertical: hp('1%'),
    overflow: 'hidden',
  },
  headingView: {
    paddingVertical: 4,
    paddingHorizontal: 2,
    backgroundColor: COLORS.sky_blue,
    alignItems: 'center',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  dot: {
    height: 5,
    width: 5,
    borderRadius: 2.5,
    backgroundColor: COLORS.basic_black,
    marginHorizontal: wp('0.5%'),
  },
  pdfView: {alignItems: 'center', padding: 4},
  pdf: {alignItems: 'center', paddingTop: 20},
});

export default styles;
