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
  topView: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: wp('5%'),
    marginTop: hp('2%'),
  },
  randomTxt: {
    color: 'rgb(74,168,197)',
    marginRight: wp('10%'),
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('3%'),
  },
  topic: {color: 'rgb(39,39,39)', marginLeft: wp('10%')},
  list: {marginVertical: hp('2%'), alignItems: 'center'},
});

export default styles;
