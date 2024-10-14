import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  ScrollView,
  FlatList,
  Modal,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import styles from './Styles';
import SearchBar from '../../components/SearchBar/SearchBar';
import CourseCard from '../../components/CourseCard/CourseCard';
import {COLORS} from '../../shared/themes';
import HTML from 'react-native-render-html';
import {useRoute} from '@react-navigation/native';
import {AUTH_STATE} from '../../redux/reducers/auth/getState';
import NoContent from '../../components/NoContent';
import Header from '../../components/Header/Header';

const CoursesDetails = ({navigation}) => {
  const route = useRoute();
  const course = route?.params?.courseData;
  const category = route?.params?.categoryTitle;
  const user = useSelector(AUTH_STATE.user);
  const dispatch = useDispatch();
  const [searchedList, setSearchedList] = useState('');
  const [searchText, setSearchText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [desc, setDesc] = useState('');

  const searchCourse = async val => {
    if (course?.length) {
      const newData = course.filter(item => {
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

  return (
    <SafeAreaView style={styles.container}>
      <Header title={category || 'Course'} />
      <View style={{marginHorizontal: wp('3%')}}>
        <View style={styles.underTop}>
          <SearchBar
            placeholder="Search Courses"
            styleSearch={{width: wp('90%')}}
            onChangeText={searchCourse}
            value={searchText}
          />
        </View>

        <View style={{marginVertical: hp('2%')}}>
          <FlatList
            data={searchText == '' ? course : searchedList}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => {
              return (
                <CourseCard
                  course={item}
                  onDesc={() => {
                    setDesc(item?.description);
                    setModalVisible(true);
                  }}
                  onPress={() =>
                    navigation.navigate('CourseEpisodes', {
                      courseDetail: item,
                    })
                  }
                />
              );
            }}
            showsVerticalScrollIndicator={false}
          />
          {(searchText == '' ? course : searchedList).length < 1 ? (
            <NoContent title={'Course'} />
          ) : null}
        </View>
      </View>
      <Modal
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.course}>Course Description</Text>
            <View style={styles.descView}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <HTML
                  source={{
                    html: desc,
                  }}
                  tagsStyles={{
                    p: {color: COLORS.sky_blue},
                  }}
                />
              </ScrollView>
            </View>
            <Text
              onPress={() => setModalVisible(false)}
              style={styles.closetext}>
              Close
            </Text>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default CoursesDetails;
