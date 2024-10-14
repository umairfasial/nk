import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {Text13, Text16Bold} from '../Text';
import styles from './Styles';
import {COURSES_STATE} from '../../redux/reducers/courses/getState';
import ImageComp from '../ImageComp/ImageComp';
import HTML from 'react-native-render-html';
import {COLORS} from '../../shared/themes';
import {getHTTPSURL} from '../../utils/functions';

const CourseCard = props => {
  const {
    course = {},
    onPress = () => {},
    onDesc = () => {},
    onPressHeart = course => {},
  } = props || {};
  const [isFavorite, setFavoriteState] = useState(false);
  const favoriteCourses = useSelector(COURSES_STATE.favoriteCourses);
  let thumbnail = '';
  try {
    thumbnail = JSON.parse(course?.thumbnail)?.url;
  } catch (e) {
    console.log(e);
  }
  useEffect(() => {
    const [existingCourse] = favoriteCourses.filter(
      c => c?.course_id === course?.course_id,
    );
    if (!existingCourse) {
      return setFavoriteState(false);
    }

    setFavoriteState(true);
  }, [favoriteCourses.length]);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.6}
      onPress={onPress}>
      <View style={styles.contentContainer}>
        <View style={{marginHorizontal: wp('3%')}}>
          <ImageComp
            source={{uri: getHTTPSURL(thumbnail)}}
            imageStyle={[
              styles.image,
              {tintColor: thumbnail ? null : COLORS.sky_blue},
            ]}
          />
        </View>
        <View style={{flex: 1}}>
          <Text16Bold textStyle={styles.headingTxt}>{course?.title}</Text16Bold>
          <View>
            <HTML
              source={{
                html:
                  course?.description?.length > 100
                    ? course?.description.slice(0, 100)
                    : course?.description,
              }}
              tagsStyles={{
                p: {color: COLORS.sky_blue},
              }}
            />
          </View>

          <View style={styles.txtContainer}>
            <View style={styles.imageComp}>
              <ImageComp
                source={
                  course.user?.image
                    ? {uri: getHTTPSURL(course.user?.image)}
                    : require('../../assets/images/muslim_inactive.png')
                }
                imageStyle={styles.userImage}
              />
              <Text13 textStyle={styles.nameTxt}>
                {course?.institute_name}
              </Text13>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

CourseCard.propTypes = {
  course: PropTypes.object,
  onPress: PropTypes.func,
  onPressHeart: PropTypes.func,
};

export default CourseCard;
