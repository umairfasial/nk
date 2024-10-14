import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../shared/themes';

const styles = StyleSheet.create({
  topContainer: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    margin: '1%',
    padding: 5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: 'white',
    width: wp('45%'),
    height: hp('22%'),
    paddingTop: 10,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('43%'),
    height: hp('22%'),
  },
  nameTxt: {
    marginTop: hp('2%'),
    color: COLORS.sky_blue,
  },
  image: {
    height: 65,
    width: 65,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: COLORS.sky_blue,
  },
});

export default styles;
