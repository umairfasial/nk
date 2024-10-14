import React from 'react';
import {View, StyleSheet, Image, ImageBackground} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Text16} from '../../src/components/Text';
import {COLORS} from '../shared/themes';
import HTML from 'react-native-render-html';
import {TouchableOpacity} from 'react-native';
import {getHTTPSURL} from '../utils/functions';

const Videocards = ({data, onPress}) => {
  let thumbnail = {url: ''};
  try {
    thumbnail = JSON.parse(data?.thumbnail);
  } catch (e) {
    console.log(e);
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.container}>
      <View style={styles.underContainer}>
        <View style={styles.videoContainer}>
          <Image
            style={styles.image}
            source={{uri: getHTTPSURL(thumbnail?.url)}}
          />
        </View>

        <View style={styles.contentWrapper}>
          <Text16 textStyle={styles.title}>{data?.title}</Text16>
          <HTML source={{html: data?.description?.slice(0, 200)}} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Videocards;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxHeight: 220,
    backgroundColor: '#fff',
    overflow: 'hidden',
    paddingVertical: 10,
    paddingRight: 20,
    marginVertical: hp('0.2%'),
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  underContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('90%'),
  },
  contentWrapper: {
    marginLeft: 10,
    overflow: 'hidden',
    paddingRight: 10,
    width: '80%',
  },
  fvtTxt: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgb(39,39,39)',
  },
  description: {
    fontFamily: 'Roboto-Regular',
    color: 'rgb(188, 188, 188)',
    width: '80%',
    overflow: 'hidden',
  },
  videoContainer: {
    width: 55,
    height: 55,
    alignSelf: 'center',
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  videoContent: {
    width: 20,
    height: 20,
  },
  image: {height: '100%', width: '100%'},
  title: {
    color: COLORS.basic_black,
    fontFamily: 'Roboto-Medium',
  },
});
