import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ImageBackground,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './Styles';
import {COURSES_STATE} from '../../redux/reducers/courses/getState';
import HTML from 'react-native-render-html';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../shared/themes';
import NoContent from '../../components/NoContent';
import Header from '../../components/Header/Header';
import {getFavoriteVideo} from '../../redux/reducers/courses/courses.actions';
import {getThumbnail} from '../../utils/functions';

const MyFavouritesCourses = ({navigation}) => {
  const dispatch = useDispatch();
  const favoriteVideos = useSelector(COURSES_STATE.favoriteVideos);
  useEffect(() => {
    navigation.addListener('focus', () => {
      dispatch(getFavoriteVideo());
    });
    dispatch(getFavoriteVideo());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="My Favorite" />

      {favoriteVideos.length ? (
        <FlatList
          style={{marginTop: '5%'}}
          data={favoriteVideos}
          renderItem={({item, index}) => {
            const lesson = item?.course?.lessons.find(
              i => i.lesson_id === item?.video_id,
            );

            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ViewEpisode', {
                    item: item,
                    indexNum: index,
                    courseId: item?.course?.course_id,
                    videoUrl: lesson?.file,
                    description: lesson?.description,
                    topic: lesson?.topic,
                    lessonId: item?.video_id,
                    watchTime: lesson?.watch_time,
                    playlist: true,
                  })
                }
                style={styles.rowView}>
                <ImageBackground
                  imageStyle={{borderRadius: 8}}
                  style={styles.thumbnail}
                  source={getThumbnail(item.video_url)}
                  resizeMode="cover">
                  <View style={styles.layer2}>
                    <FontAwesome5 name="play" size={24} color={COLORS.white} />
                  </View>
                </ImageBackground>
                <View style={styles.column}>
                  {lesson && (
                    <>
                      <Text style={styles.label} numberOfLines={1}>
                        {lesson.topic}
                      </Text>
                      <HTML
                        source={{
                          html: lesson.description.slice(0, 30),
                        }}
                        tagsStyles={{
                          p: {color: COLORS.sky_blue},
                        }}
                      />
                    </>
                  )}
                </View>
                <MaterialIcons
                  style={{alignSelf: 'center'}}
                  name="my-library-add"
                  size={24}
                  color={COLORS.sky_blue}
                />
              </TouchableOpacity>
            );
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index}
        />
      ) : (
        <NoContent title={'Favourite Videos'} />
      )}
    </SafeAreaView>
  );
};

export default MyFavouritesCourses;
