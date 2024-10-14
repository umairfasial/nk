import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PropTypes from 'prop-types';
import {Text14, Text18Bold} from '../../components/Text';
import {theme} from '../../shared/theme';
import styles from './Styles';
import {getHTTPSURL} from '../../utils/functions';

export const CommentItem = React.memo(props => {
  const {comment = {}, onReplyPress = comment => {}} = props || {};

  return (
    <View style={styles.cardContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.imageView}>
          <Image
            source={
              comment?.user.image
                ? {uri: getHTTPSURL(comment?.user.image)}
                : require('../../assets/images/default_user.png')
            }
            style={styles.imageStyle}
          />
        </View>
        <Text18Bold textStyle={styles.name}>
          {comment?.user.fname + ' ' + comment?.user.lname}
        </Text18Bold>
      </View>
      <Text14 textStyle={styles.questionTxt}>{comment?.message || ''}</Text14>
      <View style={styles.card}>
        <TouchableOpacity
          style={{marginHorizontal: wp('1.5%')}}
          activeOpacity={0.6}
          onPress={() => onReplyPress(comment)}>
          <Text14 textStyle={{color: theme.brand.primary}}>Reply</Text14>
        </TouchableOpacity>
        <FontAwesome name={'comment'} size={11} color={'rgb(90,90,90)'} />
        <Text style={{marginRight: wp('2%'), marginLeft: wp('0.5%')}}>
          {comment?.comment_replies?.length || 0}
        </Text>
      </View>
      <View style={styles.lineView} />
    </View>
  );
});

CommentItem.propTypes = {
  comment: PropTypes.object,
  onReplyPress: PropTypes.func,
};
