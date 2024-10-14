import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import HTML from 'react-native-render-html';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../../../shared/themes';
import {useDispatch, useSelector} from 'react-redux';
import {COURSES_STATE} from '../../../redux/reducers/courses/getState';
import {getFavoriteVideo} from '../../../redux/reducers/courses/courses.actions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import NoContent from '../../../components/NoContent';
import {Text14} from '../../../components/Text';
import {getThumbnail} from '../../../utils/functions';

const MyPlayList = ({navigation}) => {
  const dispatch = useDispatch();
  const favoriteVideos = useSelector(COURSES_STATE.favoriteVideos);
  useEffect(() => {
    navigation.addListener('focus', () => {
      dispatch(getFavoriteVideo());
    });
    dispatch(getFavoriteVideo()).catch(error => {
      console.error(error);
    });
  }, []);
  return (
    <View style={styles.containerPlayList}>
      {favoriteVideos.length ? (
        <>
          <FlatList
            data={favoriteVideos?.slice(0, 3)}
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
                      <FontAwesome5
                        name="play"
                        size={24}
                        color={COLORS.white}
                      />
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
                </TouchableOpacity>
              );
            }}
            showsVerticalScrollIndicator={false}
            keyExtractor={index => index}
          />
          {favoriteVideos?.length > 3 ? (
            <TouchableOpacity
              activeOpacity={0.6}
              style={{alignSelf: 'center'}}
              onPress={() => {
                navigation.navigate('My-Favourite-Courses');
              }}>
              <Text14 textStyle={{color: COLORS.sky_blue}}>View All</Text14>
            </TouchableOpacity>
          ) : null}
        </>
      ) : (
        <NoContent title={'Favourite Videos'} />
      )}
    </View>
  );
};

export default MyPlayList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGrey,
  },
  containerPlayList: {marginBottom: '5%'},
  ilmaBytesTxt: {
    fontSize: 16,
    color: 'rgb(39,39,39)',
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    marginHorizontal: '3%',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    marginVertical: '2%',
    padding: 15,
  },
  thumbnail: {
    width: 100,
    height: 100,
    overflow: 'hidden',
  },
  layer2: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  column: {
    width: '60%',
    overflow: 'hidden',
  },
  label: {
    color: COLORS.sky_blue,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
