import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import VideoPlayer from 'react-native-video-player';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ImageComp from './ImageComp/ImageComp';

const FavouriteVideoCard = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container}
      onPress={props.onPress}>
      <View style={styles.contentContainer}>
        <View>
          <ImageComp
            source={require('../assets/images/menu_inactive.png')}
            imageStyle={styles.menuStyle}
          />
        </View>
        <View style={styles.video}>
          <VideoPlayer
            video={{
              uri: `http://res.cloudinary.com/digital-motion/video/upload/v1670604215/xxjzxqr5xlzbbonbnfhk.mp4`,
            }}
            thumbnail={require('../assets/images/boy1.jpg')}
          />
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.fvtTxt}>Introduction</Text>
          <Text style={styles.description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.{' '}
          </Text>
        </View>
        <View style={{position: 'absolute'}}>
          <ImageComp
            source={require('../assets/images/add_video.png')}
            imageStyle={styles.image}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FavouriteVideoCard;

const styles = StyleSheet.create({
  container: {
    width: wp('100%'),
    height: Platform.OS === 'ios' ? hp('11%') : hp('12%'),
    backgroundColor: '#fff',
    overflow: 'hidden',
    paddingVertical: 10,
    paddingRight: 20,
    marginVertical: hp('0.2%'),
  },
  contentWrapper: {
    marginLeft: 10,
    width: wp('50%'),
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
  menuStyle: {
    height: 20,
    width: 20,
    marginHorizontal: wp('2%'),
  },
  contentContainer: {flexDirection: 'row', alignItems: 'center'},
  video: {width: 120, height: 77, alignSelf: 'center'},
  image: {height: 16, width: 16, marginHorizontal: wp('90%')},
});
