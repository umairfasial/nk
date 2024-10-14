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
import {isEmailValid} from '../../shared/functions';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [emailError, setemailError] = useState({error: false, msg: ''});

  const Validation = () => {
    if (!email) {
      setemailError({error: true, msg: 'Please enter email !'});
      return;
    } else if (!isEmailValid(email)) {
      setemailError({error: true, msg: 'Please enter valid email !'});
      return;
    } else {
      navigation.navigate('Otp');
    }
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
        <Text20 textStyle={styles.headingtxt}>Forgot Password</Text20>
      </TouchableOpacity>
      <View style={styles.imgView}>
        <ImageComp
          source={require('../../assets/images/fPasswordImage.jpg')}
          imageStyle={styles.image}
        />
      </View>
      <FormInput
        inputStyle={styles.form}
        placeholder="email"
        value={email}
        onChangeText={value => {
          setEmail(value);
          setemailError({error: false, msg: ''});
        }}
      />
      {emailError.error ? (
        <Text style={styles.errMsg}>{emailError.msg}</Text>
      ) : (
        <></>
      )}
      <Text style={styles.msgTxt}>
        Please enter your email. A verification link
        {'\n'}
        will be sent to your email.
      </Text>
      <View style={styles.buttonView}>
        <ButtonComp
          btnName="Next"
          styleBtn={styles.button}
          styleTxt={{color: COLORS.white}}
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

export default ForgotPassword;
