import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../shared/themes';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(246,246,246)',
  },
  topView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp('5%'),
    marginTop: hp('2%'),
  },
  underTop: {
    flexDirection: 'row',
    marginTop: hp('2%'),
    marginHorizontal: wp('5%'),
    alignItems: 'center',
  },
  endTxt: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: hp('2%'),
    fontFamily: 'Roboto-Regular',
    color: COLORS.grey,
    fontSize: 13,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    marginHorizontal: '3%',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    marginVertical: '2%',
    padding: 15,
  },
  thumbnail: {
    width: 100,
    height: 100,
    overflow: 'hidden',
  },
  layer2: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  column: {
    width: '60%',
    overflow: 'hidden',
  },
  label: {
    color: COLORS.sky_blue,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
