import {
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import VideoPlayer from 'react-native-video-player';
import {COLORS} from '../../shared/themes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useRoute} from '@react-navigation/native';
import {getHTTPSURL} from '../../utils/functions';

const VideoScreen = ({navigation}) => {
  const route = useRoute();
  const url = route?.params?.url;
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const handleVideoLoadStart = () => {
    setIsVideoLoading(true);
  };
  const handleVideoLoad = () => {
    setIsVideoLoading(false);
  };
  useEffect(() => {
    setIsVideoLoading(true);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.backicon}>
        <Ionicons name="arrow-back" size={24} color={COLORS.sky_blue} />
      </TouchableOpacity>
      <View style={styles.video}>
        {isVideoLoading && (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color={COLORS.normal_grey} />
          </View>
        )}
        <VideoPlayer
          autoplay={true}
          pauseOnPress={true}
          resizeMode="contain"
          style={styles.videoContent}
          video={{
            uri: getHTTPSURL(url),
          }}
          onStart={handleVideoLoadStart}
          onLoad={handleVideoLoad}
        />
      </View>
    </View>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  videoContent: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  backicon: {
    padding: 11,
  },
  video: {
    flex: 1,
    bottom: 0,
  },
  loading: {
    position: 'absolute',
    top: '48%',
    alignSelf: 'center',
    zIndex: 1,
  },
});
