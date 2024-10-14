import React, {useState} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
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
import ImageComp from '../../components/ImageComp/ImageComp';

const Otp = ({navigation}) => {
  const [otp, setOtp] = useState('');

  const Validation = () => {
    return navigation.navigate('New-Password');
  };
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
        <Text20 textStyle={{marginHorizontal: wp('1%')}}>OTP</Text20>
      </TouchableOpacity>

      <View style={styles.imageView}>
        <ImageComp
          source={require('../../assets/images/otp.jpg')}
          imageStyle={styles.image}
        />
      </View>
      <View style={styles.formView}>
        <FormInput placeholder="OTP" value={otp} onChangeText={setOtp} />
        <Text style={styles.msgTxt}>
          An email has been sent to someone@example.com
          {'\n'}
          Please enter the OTP to confirm your identity.
        </Text>
      </View>

      <View style={styles.buttonView}>
        <ButtonComp
          btnName="Confirm"
          styleTxt={{color: COLORS.white}}
          styleBtn={styles.button}
          onPress={Validation}
        />
        <ButtonComp
          onPress={() => navigation.goBack()}
          btnName="Cancel"
          styleBtn={[styles.button, {backgroundColor: COLORS.white}]}
          styleTxt={{color: COLORS.basic_black}}
        />
      </View>
    </SafeAreaView>
  );
};

export default Otp;
