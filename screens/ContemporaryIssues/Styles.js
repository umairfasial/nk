import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: 'rgb(246,246,246)',
  },
  topView: { 
    alignItems: 'center',
    flexDirection: 'row', 
    marginHorizontal: wp('5%'), 
    marginTop: hp('2%'),
  },
  headingTxt: { 
    marginHorizontal: wp('1%'),
  },
  underTop: { 
    flexDirection: 'row', 
    marginTop: hp('2%'), 
    marginHorizontal: wp('5%'),
    alignItems: 'center',
  },
});

export default styles;