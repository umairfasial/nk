import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { COLORS } from '../../shared/themes';
const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fff',
  },
  underContainer: {
    marginTop: hp('3%'),
    marginHorizontal: wp('5%'),
  },
  issueView: { 
    marginTop: hp('3%'), 
    flexDirection: 'row', 
    marginHorizontal: wp('2%'), 
    alignItems: 'center', 
    flexWrap: 'wrap',
  },
  descriptionTxt: { 
    marginTop: hp('0.5%'),
    color: COLORS.grey,
  },
  issueContainer: { 
    marginTop: hp('3%'), 
    flexDirection: 'row', 
    flexWrap: 'wrap',
  },
  issuesTxt: {
    marginLeft: wp('2%'),
    fontFamily: 'Roboto-Regular', 
    color: COLORS.basic_black,
  },
  pointView: { 
    height: hp('4%'), 
    backgroundColor: 'rgb(249,249,249)', 
    borderRadius: 4, 
    alignItems: 'center', 
    justifyContent: 'space-around', 
    marginHorizontal: wp('1%'),
    marginVertical: hp('0.3%'),
  },
  pointsTxt: { 
    fontFamily: 'Roboto-Regular', 
    fontSize: 13, 
    color: 'rgb(90,90,90)',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});

export default styles;