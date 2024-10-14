import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../shared/themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topView: {
    width: wp('100%'),
    backgroundColor: COLORS.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 2,
    borderColor: COLORS.sky_blue,
    borderTopColor: 'transparent',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  headView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  iconsStyle: {
    width: 16,
    height: 16,
    marginHorizontal: wp('3%'),
    resizeMode: 'cover',
    tintColor: COLORS.sky_blue,
  },
  header: {
    marginLeft: wp('2%'),
    paddingBottom: 15,
    marginTop: hp('1%'),
  },
  questions: {
    fontFamily: 'Roboto-Regular',
    color: COLORS.sky_blue,
  },
  card: {marginTop: hp('2%'), flex: 1},
});

export default styles;
