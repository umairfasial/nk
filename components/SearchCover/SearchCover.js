import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {theme} from '../../shared/theme';

const SearchCover = () => {
  return (
    <View style={{}}>
      <Image
        source={require('../../assets/images/sukoon2.jpg')}
        style={styles.container}
      />
      <Text style={styles.heading}>
        "The heart that beats for Allah is always a stranger among the hearts
        that beat for the Dunya (world).”
      </Text>
    </View>
  );
};

export default SearchCover;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    width: '100%',
    height: hp('20%'),
    resizeMode: 'cover',
    opacity: 0.4,
  },
  heading: {
    bottom: 10,
    color: theme.ui.white,
    fontWeight: '700',
    marginHorizontal: '5%',
    position: 'absolute',
    fontSize: hp('2%'),
  },
});
