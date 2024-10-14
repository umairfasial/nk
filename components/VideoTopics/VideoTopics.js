import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import VideoPlayer from 'react-native-video-player';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './Styles';

const VideoTopics = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onPress}
      style={styles.container}>
      <VideoPlayer
        autoplay={false}
        paused={props.paused}
        onPlayPress={props?.OnPlayPress}
        pauseOnPress={props?.pauseOnPress}
        resizeMode="cover"
        style={styles.videoContent}
        video={{
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        videoWidth={wp('100%')}
        videoHeight={hp('20%')}
        thumbnail={props?.thumbnail}
      />
    </TouchableOpacity>
  );
};

export default VideoTopics;
