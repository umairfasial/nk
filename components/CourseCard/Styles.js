import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../shared/themes';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    backgroundColor: '#fff',
    overflow: 'hidden',
    justifyContent: 'center',
    marginVertical: hp('0.2%'),
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
    borderRadius: 5,
  },
  contentContainer: {flexDirection: 'row', flex: 1},
  headingTxt: {
    color: COLORS.sky_blue,
  },
  description: {
    marginRight: wp('5%'),
    fontFamily: 'Roboto-Regular',
    color: 'rgb(188, 188, 188)',
  },
  nameTxt: {
    marginLeft: wp('1%'),
    color: 'rgb(188, 188, 188)',
  },
  txtContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    resizeMode: 'cover',
    borderRadius: 5,
    backgroundColor: 'lightgrey',
  },
  nameView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageComp: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {width: 15, height: 15, borderRadius: 15},
});

export default styles;
