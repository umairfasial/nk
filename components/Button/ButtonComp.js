import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text20Bold} from '../Text';
import styles from './styles';

const ButtonComp = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.buttonLogin, props.styleBtn]}
      {...props}>
      <Text20Bold textStyle={props.styleTxt}>{props.btnName}</Text20Bold>
    </TouchableOpacity>
  );
};

export default ButtonComp;
