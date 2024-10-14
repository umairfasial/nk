import React from 'react';
import {COLORS} from '../../shared/themes';
import styles from './Styles';
import {TouchableOpacity} from 'react-native';
import {Text15} from '../../components/Text';

const IlmaCard = props => {
  return (
    <TouchableOpacity
      key={props.key}
      activeOpacity={0.6}
      style={styles.container}
      onPress={props?.onPress}>
      <Text15 numberOfLines={2} textStyle={{color: COLORS.white}}>
        {props?.title}
      </Text15>
    </TouchableOpacity>
  );
};

export default IlmaCard;
