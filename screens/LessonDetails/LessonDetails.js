import React, {useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Styles';
import Questions from '../Questions/Questions';
import OverView from '../OverView/OverView';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import {COURSES_STATE} from '../../redux/reducers/courses/getState';
import {updateLessonWatchTime} from '../../redux/reducers/courses/courses.actions';
import {COLORS} from '../../shared/themes';
import {getHTTPSURL} from '../../utils/functions';

const LessonDetails = ({navigation}) => {
  const lesson = useSelector(COURSES_STATE.selectedLesson);
  const Tab = createMaterialTopTabNavigator();
  const dispatch = useDispatch();

  let watchTime = 0;
  let duration = 0;
  useEffect(() => {
    return function () {
      dispatch(
        updateLessonWatchTime({
          watch_time: watchTime,
          video_length: duration,
          currentLessonId: lesson.lesson_id,
        }),
      );
    };
  }, []);

  return (
    <View style={styles.container}>
      <VideoPlayer
        uri={getHTTPSURL(lesson.file)}
        style={styles.videoContent}
        onLoad={e => {
          duration = e.duration;
        }}
        onProgress={e => {
          watchTime = e.currentTime;
        }}
      />
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => navigation.goBack()}
        style={{top: hp('1.5%'), position: 'absolute'}}>
        <Ionicons name="arrow-back" size={24} color={COLORS.sky_blue} />
      </TouchableOpacity>

      <View style={{flex: 1}}>
        <Tab.Navigator
          indicatorStyle={styles.indicator}
          screenOptions={styles.screenOptions}
          defaultScreenOptions={{
            swipeEnabled: true,
          }}>
          <Tab.Screen name="OverView" component={OverView} />
          <Tab.Screen name="Questions" component={Questions} />
        </Tab.Navigator>
      </View>
    </View>
  );
};

export default LessonDetails;
