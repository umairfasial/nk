import {KeyboardAvoidingView} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import styles from './styles';
import {COLORS} from '../../shared/themes';

const CustomInput = props => {
  return (
    <KeyboardAvoidingView>
      <TextInput
        mode="outlined"
        outlineColor={COLORS.sky_blue}
        activeOutlineColor={COLORS.sky_blue}
        secureTextEntry={props.secureTextEntry}
        label={props.label}
        style={[styles.textInputStyle, props.inputStyle]}
        value={props?.value}
        onChangeText={props?.onChangeText}
        keyboardType={props?.keyboardType}
        right={props.right}
      />
    </KeyboardAvoidingView>
  );
};

export default CustomInput;
