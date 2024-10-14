import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  Modal,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import styles from './Styles';
import {COLORS} from '../../shared/themes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchBar from '../../components/SearchBar/SearchBar';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ILMA_STATE} from '../../redux/reducers/ilma/getState';
import {useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COURSES_STATE} from '../../redux/reducers/courses/getState';
import NoContent from '../../components/NoContent';
import {getThumbnail} from '../../utils/functions';

const ViewAll = ({navigation}) => {
  const illmaAllVideos = useSelector(ILMA_STATE.ilmaAllVideos);
  const courses = useSelector(COURSES_STATE.courses);
  const [selected, setSelected] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [searchedList, setSearchedList] = useState('');
  const [searchText, setSearchText] = useState('');

  const SearchFilterFunction = async val => {
    if (illmaAllVideos?.length) {
      const newData = illmaAllVideos.filter(item => {
        const itemData = item?.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = val.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      if (val == '') {
        setSearchText('');
      } else {
        setSearchText(val);
        setSearchedList(newData);
      }
    }
  };

  const toggleCourseSelection = course => {
    setSelected(course?.title);
    setModalVisible(false);
    const newData = illmaAllVideos.filter(item => {
      if (course?.category_id == item?.category_ids) {
        return item;
      }
    });
    setSearchedList(newData);
  };

  return (
    <View
      style={[
        styles.container,
        {borderTopWidth: 2, borderColor: COLORS.primary_blue},
      ]}>
      <View>
        <Ionicons
          style={styles.backicon}
          onPress={() => {
            navigation.goBack();
          }}
          name="arrow-back"
          size={24}
          color={COLORS.sky_blue}
        />
      </View>
      <View style={styles.topview}>
        <SearchBar
          styleSearch={styles.searchbar}
          placeholder="Search"
          onChangeText={txt => SearchFilterFunction(txt)}
        />
        <View style={styles.textfilter}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}
            style={styles.filterview}>
            <Image
              style={styles.filter}
              source={require('../../assets/images/filter.png')}
            />
          </TouchableOpacity>
          {selected ? <View style={styles.dot} /> : null}
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.swiperView}>
          {(searchText || selected ? searchedList : illmaAllVideos).map(
            (item, index) => {
              return (
                <TouchableOpacity
                  key={index.toString()}
                  onPress={() => {
                    navigation.navigate('VideoScreen', {
                      url: item?.file,
                    });
                  }}
                  style={styles2.imgView}>
                  <ImageBackground
                    imageStyle={styles2.bgimage}
                    style={styles2.img}
                    source={getThumbnail(item?.file)}>
                    <View style={styles2.play}>
                      <Ionicons name="play" size={24} color={COLORS.white} />
                    </View>
                  </ImageBackground>
                  <Text numberOfLines={1}>{item?.title}</Text>
                </TouchableOpacity>
              );
            },
          )}
          {(searchText || selected ? searchedList : illmaAllVideos)?.length <
          1 ? (
            <View style={{alignItems: 'center', flex: 1}}>
              <NoContent title={'Video'} />
            </View>
          ) : null}
        </View>
      </View>
      {/* <GradientBorderView
        style={styles.videoContent}
        containerStyle={styles.gradientBorder}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            setSelectedVideo({
              uri: ilmasLatestVideoLink
                ? ilmasLatestVideoLink
                : selectedVideo
                ? selectedVideo
                : ilmasDefaultVideo?.file,
            });
          }}>
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
            pauseOnPress={false}
            resizeMode="cover"
            style={styles2.video}
            video={{
              uri: ilmasLatestVideoLink
                ? ilmasLatestVideoLink
                : selectedVideo
                ? selectedVideo
                : ilmasDefaultVideo?.file,
            }}
            thumbnail={getThumbnail(
              ilmasLatestVideoLink
                ? ilmasLatestVideoLink
                : selectedVideo
                ? selectedVideo
                : ilmasDefaultVideo?.file,
            )}
            onStart={handleVideoLoadStart}
            onLoad={handleVideoLoad}
          />
        </TouchableOpacity>
      </GradientBorderView> */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Ionicons
              style={styles2.close}
              onPress={() => {
                setModalVisible(false);
              }}
              name="close"
              size={26}
              color={COLORS.sky_blue}
            />
            <TouchableOpacity
              onPress={() => toggleCourseSelection(null)}
              style={[
                styles.rowView,
                {
                  borderColor: COLORS.normal_grey,
                },
              ]}>
              <Text style={styles2.title}>All</Text>
              <AntDesign name="checkcircleo" size={25} />
            </TouchableOpacity>
            {courses?.length ? (
              <FlatList
                data={courses}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity
                      onPress={() => toggleCourseSelection(item)}
                      style={[
                        styles.rowView,
                        {
                          borderColor:
                            selected == item?.title
                              ? COLORS.sky_blue
                              : COLORS.normal_grey,
                        },
                      ]}>
                      <Text style={styles2.title}>{item?.title}</Text>

                      <AntDesign
                        name="checkcircleo"
                        size={25}
                        color={
                          selected == item?.title
                            ? COLORS.sky_blue
                            : COLORS.normal_grey
                        }
                      />
                    </TouchableOpacity>
                  );
                }}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.category_id}
              />
            ) : (
              <NoContent title={'Course Categories'} />
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ViewAll;
const styles2 = StyleSheet.create({
  videoContent: {
    borderRadius: 20,
    width: '95%',
    height: '25%',
    alignSelf: 'center',
    overflow: 'hidden',
    marginTop: '2%',
  },
  video: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  imgView: {
    backgroundColor: COLORS.lightGrey,
    width: wp('45%'),
    height: hp('12'),
    marginVertical: hp('1%'),
    marginHorizontal: wp('2%'),
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
  title: {color: COLORS.basic_black},
  bgimage: {
    resizeMode: 'cover',
    borderRadius: 4,
    overflow: 'hidden',
  },
  close: {margin: '3%', alignSelf: 'flex-end'},
});
