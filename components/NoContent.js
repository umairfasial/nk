import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../shared/themes';

const NoContent = ({title, customStyle}) => {
  return (
    <View
      style={[
        {
          marginTop: '10%',
          alignSelf: 'center',
        },
        customStyle,
      ]}>
      <FontAwesome
        style={{alignSelf: 'center'}}
        name="folder-open-o"
        size={24}
        color={COLORS.sky_blue}
      />
      <Text
        style={{
          marginTop: '2%',
          fontSize: 15,
          color: COLORS.sky_blue,
        }}>
        {`No ${title} Found`}
      </Text>
    </View>
  );
};

export default NoContent;

const styles = StyleSheet.create({});
