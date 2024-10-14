import React, {useRef, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import VideoPlayer from 'react-native-video-player';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PropTypes from 'prop-types';
import {Text16} from './Text';
import HTML from 'react-native-render-html';
import {getHTTPSURL} from '../utils/functions';

const CoursesDetailsCard = props => {
  const {lesson = {}, onPress = () => {}} = props || {};
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;
  }, [videoRef]);

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container}
      onPress={onPress}>
      <VideoPlayer
        video={{
          uri: getHTTPSURL(lesson.file),
        }}
        style={{width: 87, height: 87}}
        autoplay={false}
        onLoad={e => {
          // console.log("ON LOAD =====> ", e);
        }}
        onProgress={e => {
          // console.log("ON PROGRESS =====> ", e);
        }}
        customStyles={{
          playIcon: {
            display: 'none',
          },
          playButton: {
            display: 'none',
          },
        }}
        ref={videoRef}
      />
      <View style={styles.contentWrapper}>
        <Text16 textStyle={styles.fvtTxt}>{lesson?.topic}</Text16>
        <HTML source={{html: lesson?.description}} />
      </View>
    </TouchableOpacity>
  );
};

CoursesDetailsCard.propTypes = {
  lesson: PropTypes.object,
  onPress: PropTypes.func,
};

export default CoursesDetailsCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp('1%'),
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 5,
    marginVertical: hp('0.3%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentWrapper: {
    marginLeft: 10,
    width: wp('65%'),
  },
  fvtTxt: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: 'rgb(39,39,39)',
  },
  description: {
    marginTop: hp('0.5%'),
    color: 'rgb(188, 188, 188)',
  },
});
