import React, {useState} from 'react';
import {View, TouchableOpacity, SafeAreaView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../shared/themes';
import styles from './Styles';
import FormInput from '../../components/FormInput/FormInput';
import ButtonComp from '../../components/Button/ButtonComp';
import {Text20} from '../../components/Text';

const NewPassword = ({navigation}) => {
  const [NewPassword, setNewPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
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

        <Text20 textStyle={{marginHorizontal: wp('1%')}}>New Password</Text20>
      </TouchableOpacity>

      <View style={styles.formView}>
        <FormInput
          placeholder="Enter New Password"
          value={NewPassword}
          onChangeText={setNewPassword}
        />
        <FormInput
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChangeText={setconfirmPassword}
        />
      </View>
      <View style={styles.buttonView}>
        <ButtonComp
          btnName="Update"
          styleTxt={{color: COLORS.white}}
          styleBtn={styles.button}
        />
        <ButtonComp
          onPress={() => navigation.navigate('Sign-in')}
          btnName="Cancel"
          styleBtn={[styles.button, {backgroundColor: COLORS.white}]}
          styleTxt={{color: COLORS.basic_black}}
        />
      </View>
    </SafeAreaView>
  );
};

export default NewPassword;
