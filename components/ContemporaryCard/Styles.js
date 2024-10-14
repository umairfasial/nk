import {StyleSheet, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    width: wp('100%'),
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
  },
  contentWrapper: {},
  headingTxt: {
    color: 'rgb(39,39,39)',
  },
  description: {
    marginRight: wp('5%'),
    fontFamily: 'Roboto-Regular',
    color: 'rgb(188, 188, 188)',
    width: '80%',
    overflow: 'hidden',
  },
  nameTxt: {
    marginLeft: wp('1%'),
    color: 'rgb(188, 188, 188)',
    width: '80%',
    overflow: 'hidden',
  },
  txtContainer: {
    flexDirection: 'row',
    marginTop: hp('2%'),
    width: wp('100%'),
  },
  image: {
    width: 87,
    height: 87,
    alignSelf: 'center',
    resizeMode: 'cover',
    borderRadius: 5,
  },
  imageView: {flexDirection: 'row', alignItems: 'center'},
  imginactive: {width: 13, height: 13},
  activeView: {position: 'absolute', marginLeft: wp('60%')},
  imgactive: {width: 17, height: 15},
});

export default styles;
