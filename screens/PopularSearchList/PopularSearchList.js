import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {theme} from '../../shared/theme';
import Entypo from 'react-native-vector-icons/Entypo';
const PopularSearchList = () => {
  const renderItem = () => {
    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.6}>
          <Text style={styles.heading}>Heading</Text>
          <Text>Some Detail</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
          <Entypo name="dots-three-vertical" />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <FlatList renderItem={renderItem} data={[1, 2, 3, 4, 5]} />
    </View>
  );
};

export default PopularSearchList;

const styles = StyleSheet.create({
  heading: {
    color: theme.ui.black,
    fontWeight: '700',
  },
  container: {
    paddingVertical: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
