import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PropTypes from 'prop-types';
import {COLORS} from '../shared/themes';
import {Text16Bold} from './Text';
import HTML from 'react-native-render-html';
import {getHTTPSURL} from '../utils/functions';

const FavouriteCoursesCard = props => {
  const {course = {}, onPress = () => {}} = props || {};

  let thumbnail = {url: ''};
  try {
    thumbnail = JSON.parse(course?.thumbnail);
  } catch (e) {
    console.log(e);
  }

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container}
      onPress={onPress}>
      <View style={styles.contentContainer}>
        <View style={styles.imgView}>
          <Image
            source={{uri: getHTTPSURL(thumbnail.url)}}
            style={styles.image}
          />
        </View>
        <View style={styles.contentWrapper}>
          <View style={styles.card}>
            <View style={styles.titleContainer}>
              <Text16Bold textStyle={styles.fvtTxt}>{course?.title}</Text16Bold>
            </View>
            <View style={styles.numberContainer}>
              <Text style={styles.numberTxt}>
                {course?.lessons?.length}
                {course?.lessons?.length > 1 ? ' Videos' : ' Video'}
              </Text>
            </View>
          </View>
          <HTML source={{html: course?.description}} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

FavouriteCoursesCard.propTypes = {
  course: PropTypes.object,
  onPress: PropTypes.func,
};

export default FavouriteCoursesCard;

const styles = StyleSheet.create({
  container: {
    width: wp('98%'),
    backgroundColor: '#fff',
    overflow: 'hidden',
    paddingVertical: 10,
    marginVertical: hp('0.2%'),
    alignSelf: 'center',
    borderRadius: 5,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('90%'),
  },
  contentWrapper: {
    marginLeft: 6,
    width: '80%',
    overflow: 'hidden',
  },
  titleContainer: {
    width: wp('50%'),
    height: wp('5%'),
  },
  fvtTxt: {
    color: 'rgb(39,39,39)',
  },
  description: {
    color: 'rgb(188, 188, 188)',
    width: '80%',
    overflow: 'hidden',
  },
  numberContainer: {
    width: 66,
    height: 16,
    borderRadius: 8,
    backgroundColor: '(rgb(239,239,239)',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp('2%'),
  },
  numberTxt: {
    fontFamily: 'Roboto-Regular',
    fontSize: 10,
    color: COLORS.sky_blue,
  },
  imgView: {width: 85, height: 55, alignSelf: 'center', padding: 3},
  image: {width: 85, height: 55, resizeMode: 'contain'},
  card: {flexDirection: 'row', justifyContent: 'space-between'},
});
