import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';
import ImageComp from '../ImageComp/ImageComp';
import {Text15Bold} from '../Text';
import styles from './Styles';
import HTML from 'react-native-render-html';
import {COLORS} from '../../shared/themes';
import {getHTTPSURL} from '../../utils/functions';

const SheikhsCard = React.memo(props => {
  const {data = {}} = props || {};
  const htmlContent = data.bio ? data.bio.slice(0, 20) : 'No Bio';

  const tagsStyles = {
    p: {color: COLORS.sky_blue, bottom: 13},
  };

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={props?.onPress}
      style={styles.topContainer}>
      <ImageComp
        source={
          data.image
            ? {uri: getHTTPSURL(data?.image)}
            : require('../../assets/images/default_user.png')
        }
        imageStyle={styles.image}
        resizeMode="cover"
      />
      <Text15Bold numberOfLines={1} textStyle={styles.nameTxt}>
        {data.fname + ' ' + data.lname}
      </Text15Bold>
      {data.bio ? (
        <HTML source={{html: htmlContent}} tagsStyles={tagsStyles} />
      ) : (
        <Text style={{color: COLORS.sky_blue}}>No Bio</Text>
      )}
    </TouchableOpacity>
  );
});

SheikhsCard.propTypes = {
  data: PropTypes.object,
};

export default SheikhsCard;
