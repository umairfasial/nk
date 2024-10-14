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
  underConatiner: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginTop: hp('5%'),
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.sky_blue,
  },
  titleCard: {marginHorizontal: wp('5%'), flexDirection: 'row'},
  title: {color: COLORS.white, marginLeft: wp('2%')},
});

export default styles;
