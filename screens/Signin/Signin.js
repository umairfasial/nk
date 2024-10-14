import React, {useState} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import styles from './Styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FormInput from '../../components/FormInput/FormInput';
import ButtonComp from '../../components/Button/ButtonComp';
import {Text18} from '../../components/Text';
import {COLORS} from '../../shared/themes';
import {loginAction} from '../../redux/reducers/auth/auth.actions';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {isEmailValid} from '../../shared/functions';
import {GradientBorderView} from '../../components/GradientBorderView/GradientBorderView';
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';
import {
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from 'react-native-fbsdk';
const Signin = ({navigation}) => {
  // GoogleSignin.configure({
  //   scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  //   webClientId:
  //     '61321131047-8t7a4ot3mhfj5pas10m89ror6amg5vu0.apps.googleusercontent.com',
  // });
  const dispatch = useDispatch();
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState({error: false, msg: ''});
  const [emailError, setEmailError] = useState({error: false, msg: ''});

  const onLogin = () => {
    if (!email) {
      setEmailError({error: true, msg: 'Please enter your email !'});
      setPasswordError({error: true, msg: 'Please enter password !'});
      return;
    }
    if (!isEmailValid(email)) {
      setEmailError({error: true, msg: 'Please enter valid email !'});
      return;
    }
    if (!password) {
      setPasswordError({error: true, msg: 'Please enter password !'});
      return;
    }

    dispatch(loginAction({email, password}));
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/backgroundImage1.png')}
        resizeMode="stretch"
        style={{flex: 1}}>
        <GradientBorderView
          style={styles.underContainer}
          containerStyle={styles.borderContainer}>
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <View style={{alignItems: 'center'}}>
              <FormInput
                keyboardType="email-address"
                placeholder="Email"
                value={email}
                onChangeText={value => {
                  setemail(value);
                  setEmailError({error: false, msg: ''});
                }}
              />

              {emailError.error && (
                <Text style={styles.errMsg}>{emailError.msg}</Text>
              )}
              <FormInput
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={value => {
                  setPassword(value);
                  setPasswordError({error: false, msg: ''});
                }}
              />
              {passwordError.error && (
                <Text style={styles.errMsg}>{passwordError.msg}</Text>
              )}
              <ButtonComp
                btnName="Login"
                styleTxt={{color: COLORS.white}}
                onPress={onLogin}
              />

              <View style={styles.textView}>
                <Text18>Not a member? </Text18>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => {
                    navigation.navigate('Sign-up');
                  }}>
                  <Text18 textStyle={styles.signup}> Sign Up Here </Text18>
                </TouchableOpacity>
              </View>

              <Text></Text>
              <Text></Text>
            </View>
          </KeyboardAwareScrollView>
        </GradientBorderView>
      </ImageBackground>
    </View>
  );
};

export default Signin;
