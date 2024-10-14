import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import VideoPlayer from 'react-native-video-player';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../shared/themes';
import {useRoute} from '@react-navigation/native';
import HTML from 'react-native-render-html';
import {useDispatch, useSelector} from 'react-redux';
import {COURSES_STATE} from '../../redux/reducers/courses/getState';
import {
  addRemoveFavoriteVideo,
  setSelectedLesson,
  updateLessonWatchTime,
} from '../../redux/reducers/courses/courses.actions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImageComp from '../../components/ImageComp/ImageComp';
import {getHTTPSURL, getThumbnail} from '../../utils/functions';

const ViewEpisode = ({navigation}) => {
  const route = useRoute();
  const dispatch = useDispatch();

  const item = route?.params?.item;
  const indexNum = route?.params?.indexNum;
  const courseId = route?.params?.courseId;
  const videoUrl = route?.params?.videoUrl;
  const allVideos = JSON.parse(videoUrl || '');
  const description = route?.params?.description;
  const topic = route?.params?.topic;
  const lessonId = route?.params?.lessonId;
  const watchTime = route?.params?.watchTime;
  const playlist = route?.params?.playlist;
  const favoriteVideos = useSelector(COURSES_STATE.favoriteVideos);

  const [videoIndex, setVideoIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const handleVideoLoadStart = () => {
    setIsVideoLoading(true);
  };

  const handleVideoLoad = () => {
    setIsVideoLoading(false);
  };

  useEffect(() => {
    navigation.addListener('focus', () => {
      dispatch(setSelectedLesson(item));
      if (!watchTime) {
        dispatch(
          updateLessonWatchTime({
            watch_time: 'Yes',
            course_id: courseId,
            currentLessonId: lessonId,
          }),
        );
      }
    });
  }, [dispatch, item, navigation]);

  useEffect(() => {
    if (favoriteVideos) {
      const favoriteVideoIds = favoriteVideos.map(video => video?.video_id);
      setIsFavorite(favoriteVideoIds.includes(lessonId));
    }
  }, [favoriteVideos]);

  const onPressHeart = async () => {
    try {
      const videoUrls = JSON.parse(videoUrl).map(video => video.url);
      const reqBody = {
        course_id: courseId,
        video_id: lessonId,
        video_url: videoUrls[0],
      };
      await dispatch(addRemoveFavoriteVideo(reqBody));

      setIsFavorite(prevIsFavorite => !prevIsFavorite);
    } catch (error) {
      setIsFavorite(prevIsFavorite => prevIsFavorite);
      console.log(error);
    }
  };

  const handleNext = () => {
    setVideoIndex(prevIndex => prevIndex + 1);
  };

  const handlePrev = () => {
    setVideoIndex(prevIndex => prevIndex - 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.video}>
        {isVideoLoading && (
          <View style={styles.indicator}>
            <ActivityIndicator size="large" color={COLORS.normal_grey} />
          </View>
        )}
        <VideoPlayer
          autoplay={false}
          pauseOnPress={true}
          resizeMode="cover"
          style={styles.videoContent}
          video={{
            uri: getHTTPSURL(allVideos[videoIndex].url),
          }}
          thumbnail={getThumbnail(allVideos[videoIndex].url)}
          onStart={handleVideoLoadStart}
          onLoad={handleVideoLoad}
        />
      </View>
      <AntDesign
        onPress={() => navigation.goBack()}
        name="leftcircle"
        size={24}
        color={COLORS.white}
        style={styles.circle}
      />
      <TouchableOpacity style={styles.heart} onPress={onPressHeart}>
        <ImageComp
          source={require('../../assets/images/like_active.png')}
          imageStyle={{
            width: 24,
            height: 24,
            tintColor: isFavorite ? COLORS.sky_blue : COLORS.normal_grey,
          }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      {allVideos?.length > 1 ? (
        <View
          style={{
            ...styles.buttons,
            alignSelf: videoIndex == 0 ? 'flex-end' : 'flex-start',
          }}>
          {videoIndex == 0 ? null : (
            <Text onPress={handlePrev} style={styles.prev}>
              Prev
            </Text>
          )}
          {videoIndex == allVideos?.length - 1 ? null : (
            <Text onPress={handleNext} style={styles.prev}>
              Next
            </Text>
          )}
        </View>
      ) : null}
      <Text style={styles.overView}>Overview</Text>
      {playlist ? (
        <Text numberOfLines={1} style={styles.topic}>
          {topic}
        </Text>
      ) : (
        <Text numberOfLines={1} style={styles.topic}>
          {'Lesson ' + Number(indexNum + 1) + ' - ' + topic ||
            `Lesson ${indexNum + 1}`}
        </Text>
      )}

      <View style={styles.desc}>
        <HTML
          source={{
            html: description,
          }}
          tagsStyles={{
            p: {color: COLORS.sky_blue},
          }}
        />
      </View>
    </View>
  );
};

export default ViewEpisode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  video: {
    width: wp('100%'),
    height: hp('25%'),
    marginBottom: '2%',
  },
  videoContent: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  overView: {
    marginTop: '5%',
    marginHorizontal: '3%',
    color: COLORS.sky_blue,
    fontSize: 18,
    fontWeight: 'bold',
  },
  topic: {
    color: COLORS.sky_blue,
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: '3%',
    marginTop: '5%',
  },
  desc: {
    marginHorizontal: '3%',
    marginVertical: '2%',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '3%',
  },
  prev: {
    color: COLORS.sky_blue,
    fontSize: 16,
    fontWeight: 'bold',
  },
  circle: {
    position: 'absolute',
    top: '2%',
    left: '2%',
  },
  heart: {
    position: 'absolute',
    top: '2%',
    right: '2%',
  },
  indicator: {
    position: 'absolute',
    top: '35%',
    alignSelf: 'center',
    zIndex: 1,
  },
});
