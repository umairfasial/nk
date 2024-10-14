import {
  FlatList,
  ImageBackground,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {GradientBorderView} from '../../components/GradientBorderView/GradientBorderView';
import {COLORS} from '../../shared/themes';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HTML from 'react-native-render-html';
import StepIndicator from 'react-native-step-indicator';
import {getSingleCourse} from '../../redux/reducers/courses/courses.actions';
import {useDispatch, useSelector} from 'react-redux';
import {COURSES_STATE} from '../../redux/reducers/courses/getState';
import NoContent from '../../components/NoContent';
import {getHTTPSURL, getThumbnail} from '../../utils/functions';

const CourseEpisodes = ({navigation}) => {
  const route = useRoute();
  const courseItem = route?.params?.courseDetail;
  const courseDetail = useSelector(COURSES_STATE.selectedCourse);
  const [modalVisible, setModalVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [step, setStep] = useState(0);
  const [pic, setPic] = useState('');
  const [timeLine, setTimeline] = useState([]);
  const dispatch = useDispatch();

  const customStyles = {
    stepIndicatorSize: 15,
    currentStepIndicatorSize: 20,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: COLORS.sky_blue,
    stepStrokeWidth: 1,
    stepStrokeFinishedColor: COLORS.sky_blue,
    stepStrokeUnFinishedColor: COLORS.sky_blue,
    separatorFinishedColor: COLORS.sky_blue,
    separatorUnFinishedColor: COLORS.sky_blue,
    stepIndicatorFinishedColor: COLORS.sky_blue,
    stepIndicatorUnFinishedColor: COLORS.white,
    stepIndicatorCurrentColor: COLORS.sky_blue,
    stepIndicatorLabelFontSize: 0,
    currentStepIndicatorLabelFontSize: 0,
    stepIndicatorLabelCurrentColor: COLORS.white,
    stepIndicatorLabelFinishedColor: COLORS.white,
    stepIndicatorLabelUnFinishedColor: COLORS.white,
    labelColor: COLORS.sky_blue,
    labelSize: 10,
    currentStepLabelColor: COLORS.sky_blue,
  };

  useEffect(() => {
    if (courseItem) {
      navigation.addListener('focus', async () => {
        await dispatch(getSingleCourse(courseItem?.course_id));
      });
    }

    if (courseDetail) {
      handleLessons();
    }
  }, [courseItem, courseDetail]);

  const handleLessons = async () => {
    try {
      let thumbnail = '';
      thumbnail = JSON.parse(courseDetail?.thumbnail)?.url;
      setPic(getHTTPSURL(thumbnail));
      let count = -1;
      let arr = [];
      if (courseDetail.lessons.length) {
        courseDetail?.lessons?.forEach((item, index) => {
          arr.push('Lesson ' + Number(index + 1));
          if (item?.watch_time) {
            return (count = count + 1);
          }
        });
        setTimeline(arr);
      }

      if (count >= 0) {
        setStep(count);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <GradientBorderView style={styles.border}>
        <ImageBackground
          style={styles.img}
          resizeMode="cover"
          source={{uri: getHTTPSURL(pic)}}>
          <View style={styles.layer}>
            <AntDesign
              onPress={navigation.goBack}
              name="leftcircle"
              size={24}
              color={COLORS.white}
            />
          </View>
        </ImageBackground>
      </GradientBorderView>

      {courseDetail?.lessons?.length > 1 ? (
        <StepIndicator
          customStyles={customStyles}
          currentPosition={step}
          labels={timeLine}
          stepCount={courseDetail?.lessons?.length}
        />
      ) : null}
      <Text style={styles.title}>{courseDetail.title}</Text>
      <View style={styles.descView}>
        <HTML
          source={{
            html: isExpanded
              ? courseDetail?.description
              : courseDetail?.description?.slice(0, 138),
          }}
          tagsStyles={{
            p: {color: COLORS.sky_blue},
          }}
        />
        {courseDetail?.description?.length > 138 && !isExpanded && (
          <View style={styles.showview}>
            <Text
              style={styles.showtext}
              onPress={() => setIsExpanded(!isExpanded)}>
              . . .Show More
            </Text>
          </View>
        )}
        {isExpanded && (
          <View>
            <Text
              style={styles.showtext}
              onPress={() => setIsExpanded(!isExpanded)}>
              Show Less
            </Text>
          </View>
        )}
      </View>
      {courseDetail?.lessons?.length ? (
        <FlatList
          style={{marginTop: '5%'}}
          data={courseDetail?.lessons}
          renderItem={({item, index}) => {
            let videoUrl = '';
            try {
              videoUrl = JSON.parse(item?.file)[0].url;
            } catch (error) {}
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ViewEpisode', {
                    item: item,
                    indexNum: index,
                    courseId: item?.course_id,
                    videoUrl: item?.file,
                    description: item?.description,
                    topic: item?.topic,
                    lessonId: item?.lesson_id,
                    watchTime: item?.watch_time,
                    playlist: false,
                  })
                }
                style={styles.rowView}>
                <ImageBackground
                  imageStyle={{borderRadius: 8}}
                  style={styles.thumbnail}
                  source={getThumbnail(videoUrl)}
                  resizeMode="cover">
                  <View style={styles.layer2}>
                    <FontAwesome5 name="play" size={24} color={COLORS.white} />
                  </View>
                </ImageBackground>
                <View style={styles.column}>
                  <Text style={styles.label} numberOfLines={1}>
                    {'Lesson ' + Number(index + 1) + ' - ' + item.topic ||
                      `Lesson ${index + 1}`}
                  </Text>
                  <HTML
                    source={{
                      html: item.description.slice(0, 30),
                    }}
                    tagsStyles={{
                      p: {color: COLORS.sky_blue},
                    }}
                  />
                </View>
              </TouchableOpacity>
            );
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index}
        />
      ) : (
        <NoContent title={'Lesson'} />
      )}
      <Modal
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <AntDesign
              onPress={() => setModalVisible(false)}
              style={{alignSelf: 'flex-end'}}
              name="close"
              size={20}
              color={COLORS.sky_blue}
            />
            <Text style={styles.desc}>Course Description</Text>
            <View style={styles.descDetailView}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <HTML
                  source={{
                    html: courseDetail?.description,
                  }}
                />
              </ScrollView>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default CourseEpisodes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  border: {
    width: wp('100%'),
    height: hp('30%'),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
    backgroundColor: COLORS.white,
    marginBottom: '5%',
  },
  img: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  layer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%',
    padding: 12,
  },
  title: {
    color: COLORS.sky_blue,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: '5%',
    marginHorizontal: '3%',
  },
  descView: {
    overflow: 'hidden',
    marginHorizontal: '3%',
  },
  show: {
    color: COLORS.sky_blue,
    fontSize: 17,
    fontWeight: 'bold',
    marginHorizontal: '3%',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '90%',
    height: '65%',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
    marginLeft: '3%',
  },
  label: {
    color: COLORS.sky_blue,
    fontSize: 16,
    fontWeight: 'bold',
  },
  showtext: {color: COLORS.sky_blue, fontWeight: 'bold'},
  showview: {position: 'absolute', bottom: 14, right: 70},
  desc: {
    color: COLORS.sky_blue,
    fontSize: 17,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: '3%',
  },
  descDetailView: {
    height: '85%',
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: COLORS.sky_blue,
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
});
