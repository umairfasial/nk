import React from 'react';
import {View, TextInput} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './Styles';
import {COLORS} from '../../shared/themes';

const SearchBar = props => {
  return (
    <View style={[styles.container, props.styleSearch]}>
      <FontAwesome
        name={'search'}
        color={'rgb(188,188,188)'}
        size={18}
        style={styles.iconStyle}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder={props?.placeholder}
        placeholderTextColor={COLORS.grey}
        value={props?.value}
        onChangeText={props?.onChangeText}
      />
    </View>
  );
};

export default SearchBar;
