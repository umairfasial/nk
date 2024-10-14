import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

import {Text16, Text20Bold} from '../../components/Text';
import {COURSES_STATE} from '../../redux/reducers/courses/getState';
import {CATEGORY_STATE} from '../../redux/reducers/categories/getState';
import {COLORS} from '../../shared/themes';
import styles from './Styles';
import ImageComp from '../../components/ImageComp/ImageComp';
import HTML from 'react-native-render-html';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const OverView = () => {
  const [category, setCategory] = useState({});
  const lesson = useSelector(COURSES_STATE.selectedLesson);
  const course = useSelector(COURSES_STATE.selectedCourse);
  const categories = useSelector(CATEGORY_STATE.categories);

  useEffect(() => {
    if (!categories || !course) return;

    const [category] = categories?.filter(
      cat => cat?.category_id == course.category_ids,
    );

    setCategory(category);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.underContainer}>
        <Text20Bold textStyle={{color: COLORS.basic_black}}>
          {lesson.topic}
        </Text20Bold>
        <HTML source={{html: lesson?.description}} />
        <View style={styles.issueView}>
          <ImageComp
            source={require('../../assets/images/issueclosed-.png')}
            imageStyle={{width: 17, height: 17}}
          />
          <Text16 textStyle={styles.issuesTxt}>
            {category ? category?.title : ''}
          </Text16>
        </View>
        <View style={styles.issueContainer}>
          {course?.map && course?.tags && course?.tags?.length ? (
            course.map((tag, index) => (
              <View style={styles.pointView} key={index.toString()}>
                <Text style={styles.pointsTxt}>Faith</Text>
              </View>
            ))
          ) : (
            <View style={styles.pointView}>
              <FontAwesome name="folder-open-o" size={24} color="black" />
              <Text style={styles.pointsTxt}>No Tag added</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default OverView;
