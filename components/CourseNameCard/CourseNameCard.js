import React from 'react';
import {View, TouchableOpacity, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PropTypes from 'prop-types';
import {COLORS} from '../../shared/themes';
import {Text18Bold} from '../Text';
import styles from './Styles';
import ImageComp from '../ImageComp/ImageComp';
import {theme} from '../../shared/theme';

const CourseNameCard = React.memo(props => {
  const {
    title,
    image,
    selectedTitle,
    right,
    cards,
    onPress = () => {},
  } = props || {};

  return (
    <TouchableOpacity
      style={[
        styles.cardContainer,
        Platform.OS === 'android' && styles.androidBorder,
        {
          borderWidth: selectedTitle === title ? 2 : null,
          borderColor: COLORS.sky_blue,
        },
      ]}
      onPress={onPress}
      activeOpacity={0.6}>
      <View style={[styles.imageView]}>
        {image ? (
          <ImageComp source={image} imageStyle={styles.iconStyle} />
        ) : (
          <ImageComp
            source={require('../../assets/images/studyingIslamic.png')}
            imageStyle={styles.iconStyle}
            resizeMode="contain"
          />
        )}
        <Text18Bold numberOfLines={2} textStyle={styles.title}>
          {title}
        </Text18Bold>
      </View>
      {right ? (
        <AntDesign name="right" size={18} color={COLORS.sky_blue} />
      ) : (
        <AntDesign
          name="checkcircleo"
          size={hp('3%')}
          color={selectedTitle === title ? COLORS.sky_blue : theme.ui.gray2}
        />
      )}
    </TouchableOpacity>
  );
});

CourseNameCard.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
  image: PropTypes.object,
};

export default CourseNameCard;
