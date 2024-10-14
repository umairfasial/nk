import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  ScrollView,
  StyleSheet,
  FlatList,
  BackHandler,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './Styles';
import VideoPlayer from 'react-native-video-player';
import MyPlayList from './MyPlatist/MyPlayList';
import MyIstiqamah from './MyIstiqamah/MyIstiqamah';
import QuestionCard from '../../components/QuestionCard/QuestionCard';
import IlmaCard from '../../components/IlmaCard/IlmaCard';
import {COLORS} from '../../shared/themes';
import {Text16, Text12, Text13} from '../../components/Text';
import {GradientBorderView} from '../../components/GradientBorderView/GradientBorderView';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ILMA_STATE} from '../../redux/reducers/ilma/getState';
import {useFocusEffect} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getIlmas,
  getIlmasAllVideos,
  getIlmasDefaultVideo,
  getIlmasLatestVideo,
} from '../../redux/reducers/ilma/ilma.actions';
import NoContent from '../../components/NoContent';
import {getAllCourse} from '../../redux/reducers/courses/courses.actions';
import {getDefaultImages} from '../../redux/reducers/categories/category.actions';
import {getHTTPSURL, getThumbnail} from '../../utils/functions';

const homeScreen = ({navigation}) => {
  const ilmasLatestVideo = useSelector(ILMA_STATE.ilmaVideo);
  const ilmasDefaultVideo = useSelector(ILMA_STATE.ilmaDefaultVideo);
  const ilmasLatestVideoLink = ilmasLatestVideo?.length
    ? ilmasLatestVideo[0]?.file
    : '';
  const [btnModal, setbtnModal] = useState(false);
  const illmaBytes = useSelector(ILMA_STATE.ilmaBytes);
  const illmaAllVideos = useSelector(ILMA_STATE.ilmaAllVideos);
  const [open, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState('');
  const [isVideoLoading, setIsVideoLoading] = useState(false);

  useEffect(() => {
    navigation.addListener('focus', () => {
      dispatch(getIlmas());
      dispatch(getIlmasLatestVideo());
      dispatch(getIlmasAllVideos());
      dispatch(getIlmasDefaultVideo());
    });
  }, []);
  useEffect(() => {
    navigation.addListener('focus', () => {
      handleCourses();
    });
  }, []);
  useFocusEffect(
    React.useCallback(() => {
      const backAction = () => {
        Alert.alert(
          'Hold on!',
          'Are you sure you want to quit this app?',
          [
            {
              text: 'Cancel',
              onPress: () => null,
              style: 'cancel',
            },
            {
              text: 'YES',
              onPress: () => BackHandler.exitApp(),
            },
          ],
          {cancelable: false},
        );
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );

      return () => backHandler.remove();
    }, []),
  );
  const Tab = createMaterialTopTabNavigator();
  const dispatch = useDispatch();
  const handleCourses = async () => {
    await dispatch(getAllCourse());
    await dispatch(getDefaultImages());
    return function () {
      onFocus = null;
    };
  };

  const handleVideoLoadStart = () => {
    setIsVideoLoading(true);
    setOpen(true);
  };

  const handleVideoLoad = () => {
    setIsVideoLoading(false);
  };

  const getSelectedVideoURL = () => {
    return ilmasLatestVideoLink
      ? ilmasLatestVideoLink
      : selectedVideo
      ? selectedVideo
      : ilmasDefaultVideo?.file;
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        contentContainerStyle={styles.scrollView}>
        <GradientBorderView
          style={styles.videoContent}
          containerStyle={styles.gradientBorder}>
          {isVideoLoading && (
            <View style={styles.indicator}>
              <ActivityIndicator size="large" color={COLORS.normal_grey} />
            </View>
          )}
          <VideoPlayer
            OnPlayPress={() => {
              setSelectedVideo({
                uri: ilmasLatestVideoLink
                  ? ilmasLatestVideoLink
                  : selectedVideo
                  ? selectedVideo
                  : ilmasDefaultVideo?.file,
              });
            }}
            pauseOnPress
            resizeMode="cover"
            style={styles2.video}
            video={{uri: getHTTPSURL(getSelectedVideoURL())}}
            thumbnail={getThumbnail(getSelectedVideoURL())}
            onStart={handleVideoLoadStart}
            onLoad={handleVideoLoad}
            onEnd={() => {
              setOpen(false);
            }}
            onShowControls={() => {
              setOpen(!open);
            }}
          />

          <View style={styles.videoText}>
            {!open && illmaAllVideos?.length > 0 && (
              <TouchableOpacity
                style={styles.viewAll}
                activeOpacity={0.6}
                onPress={() => {
                  navigation.navigate('ViewAll');
                }}>
                <Text12 textStyle={{color: COLORS.white}}>View All</Text12>
                <FontAwesome
                  name={'chevron-down'}
                  color={COLORS.white}
                  size={15}
                  style={styles.arrow}
                />
              </TouchableOpacity>
            )}
          </View>
        </GradientBorderView>

        <View style={styles.tabView}>
          <Tab.Navigator
            indicatorStyle={styles.tabIndicator}
            screenOptions={styles.screenOptions}>
            <Tab.Screen
              name="My Favourite"
              component={MyPlayList}
              options={{
                tabBarIcon: ({tintColor}) => (
                  <AntDesign name="book" size={20} color={tintColor} />
                ),
              }}
            />
            <Tab.Screen
              name="My Istiqamah"
              component={MyIstiqamah}
              options={{
                tabBarIcon: ({tintColor}) => (
                  <AntDesign name="check" size={20} color={tintColor} />
                ),
              }}
            />
          </Tab.Navigator>
        </View>

        <View style={styles.ilmaBytesView}>
          <View style={styles.ilmaUnderView}>
            <Text16 textStyle={styles.ilmaText}>Ilma Bytes</Text16>
            {illmaBytes?.length > 2 ? (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => {
                  navigation.navigate('Ilma-Bytes');
                }}>
                <Text13 textStyle={styles.ilmaAll}>View All</Text13>
              </TouchableOpacity>
            ) : null}
          </View>
          {illmaBytes?.length > 0 ? (
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              style={{paddingVertical: 8}}
              keyExtractor={({index}) => index?.toString()}
              data={illmaBytes}
              renderItem={({item, index}) => {
                return (
                  <>
                    <IlmaCard
                      key={index}
                      title={item?.title}
                      type={item?.type}
                      onPress={() => {
                        item?.type === 'text'
                          ? navigation.navigate('Ilma-Byte-Details', {
                              ilmaDetails: item,
                            })
                          : navigation.navigate('Pdf', {
                              item: item,
                            });
                      }}
                    />
                  </>
                );
              }}
            />
          ) : (
            <NoContent customStyle={{marginTop: '3%'}} title={'IlmaBytes'} />
          )}
        </View>

        <TouchableWithoutFeedback
          onPress={() => {
            setbtnModal(!btnModal);
          }}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={btnModal}
            onRequestClose={() => {
              setbtnModal(!btnModal);
            }}>
            <View style={styles.cardModal}>
              <QuestionCard
                onPress={() => {
                  {
                    navigation.navigate('Ilma-Byte-Details'),
                      setbtnModal(!btnModal);
                  }
                }}
              />
            </View>
          </Modal>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
};

export default homeScreen;

const styles2 = StyleSheet.create({
  videoContent: {
    borderRadius: 20,
    width: '95%',
    height: '25%',
    alignSelf: 'center',
    overflow: 'hidden',
    marginTop: '2%',
    backgroundColor: 'green',
  },
  video: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  imgView: {
    backgroundColor: 'rgb(246,246,246)',
    width: wp('45%'),
    height: hp('12'),
    marginVertical: hp('1%'),
    marginHorizontal: wp('2%'),
    flexDirection: 'row',
    borderRadius: 4,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  img: {
    width: wp('45%'),
    height: hp('12%'),
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  play: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: 50,
    height: 50,
    borderRadius: 30,
  },
});
