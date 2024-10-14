import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import * as RootNavigation from '../../navigation/RootNavigator';
import styles from './Styles';
import SearchBar from '../../components/SearchBar/SearchBar';
import {getAllCourse} from '../../redux/reducers/courses/courses.actions';
import {COURSES_STATE} from '../../redux/reducers/courses/getState';
import NoContent from '../../components/NoContent';
import Header from '../../components/Header/Header';
import {CATEGORY_STATE} from '../../redux/reducers/categories/getState';
import CourseNameCard from '../../components/CourseNameCard/CourseNameCard';
import {getHTTPSURL} from '../../utils/functions';

const Cources = ({navigation}) => {
  const dispatch = useDispatch();
  const courses = useSelector(COURSES_STATE.courses);
  const defaultImages = useSelector(CATEGORY_STATE.defaultImages);
  const [myCourses, setMyCourses] = useState('');
  const [searchedList, setSearchedList] = useState('');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const arr = courses.filter(item => item?.title?.length > 0);
    setMyCourses(arr);
  }, [courses]);
  useEffect(() => {
    navigation.addListener('focus', () => {
      handleCourses();
    });
  }, []);

  const handleCourses = async () => {
    await dispatch(getAllCourse());
    return function () {
      onFocus = null;
    };
  };

  const onPressItem = async course => {
    RootNavigation.navigate('CoursesDetails', {
      courseData: course?.data,
      categoryTitle: course?.title,
    });
  };

  const searchCourse = async val => {
    if (myCourses?.length) {
      const newData = myCourses.filter(item => {
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
      <Header title={'Course Categories'} />
      <View style={{marginHorizontal: wp('3%')}}>
        <View style={styles.underTop}>
          <SearchBar
            placeholder="Search Category"
            styleSearch={{width: wp('90%')}}
            onChangeText={searchCourse}
            value={searchText}
          />
        </View>

        <View style={styles.contentContainer}>
          {myCourses && myCourses?.length > 0 ? (
            <FlatList
              data={searchText == '' ? myCourses : searchedList}
              keyExtractor={(item, index) => item + index}
              renderItem={({item, index}) => {
                return (
                  <CourseNameCard
                    title={item?.title}
                    key={index?.toString()}
                    image={{
                      uri:
                        defaultImages !== undefined
                          ? getHTTPSURL(defaultImages?.defaultImage?.file)
                          : require('../../assets/images/studyingIslamic.png'),
                    }}
                    onPress={() => onPressItem(item)}
                    right={true}
                  />
                );
              }}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            <NoContent title={'Course Categories'} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Cources;
