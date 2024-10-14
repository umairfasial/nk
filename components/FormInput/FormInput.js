import React from 'react';
import {TextInput, KeyboardAvoidingView} from 'react-native';
import styles from './styles';
import {COLORS} from '../../shared/themes';

const FormInput = props => {
  return (
    <KeyboardAvoidingView>
      <TextInput
        secureTextEntry={props.secureTextEntry}
        placeholder={props?.placeholder}
        placeholderTextColor={COLORS.grey}
        style={[styles.textInputStyle, props.inputStyle]}
        value={props?.value}
        returnKeyType={props?.returnKeyType}
        onChangeText={props?.onChangeText}
        keyboardType={props?.keyboardType}
        onFocus={props?.onFocus}
        autoFocus={props?.autoFocus}
        onSubmitEditing={props?.onSubmitEditing}
        ref={props?.ref}
      />
    </KeyboardAvoidingView>
  );
};

export default FormInput;
