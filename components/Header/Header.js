import {StyleSheet} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Text15Bold} from '../Text';
import {COLORS} from '../../shared/themes';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

const Header = ({title}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => navigation.goBack()}
      style={styles.topView}>
      <FontAwesome
        name={'chevron-left'}
        size={20}
        color={COLORS.sky_blue}
        style={{marginHorizontal: wp('1%')}}
      />
      <Text15Bold style={styles.headingTxt}>{title}</Text15Bold>
    </TouchableOpacity>
  );
};

export default Header;

const styles = StyleSheet.create({
  topView: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: wp('3%'),
    marginTop: hp('2%'),
  },
  headingTxt: {
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    color: COLORS.sky_blue,
    marginHorizontal: wp('1%'),
  },
});
