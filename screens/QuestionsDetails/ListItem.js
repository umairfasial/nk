import React from 'react';
import {Image, View} from 'react-native';
import PropTypes from 'prop-types';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import {AUTH_STATE} from '../../redux/reducers/auth/getState';
import {Text14, Text16Bold} from '../../components/Text';
import {theme} from '../../shared/theme';
import {getHTTPSURL} from '../../utils/functions';

export const ListItem = React.memo(props => {
  const {data = {}} = props || {};
  const currentUser = useSelector(AUTH_STATE.user);
  return (
    <View
      style={{
        marginTop: hp('1%'),
        marginHorizontal: wp('2%'),
        borderRadius: 10,
        backgroundColor:
          currentUser.user_id === data.user.user_id
            ? theme.ui.gray
            : theme.ui.gray3,
        padding: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={
            data.user.image
              ? {uri: getHTTPSURL(user.image)}
              : require('../../assets/images/default_user.png')
          }
          style={{
            width: 38,
            height: 38,
            borderRadius: 19,
            resizeMode: 'cover',
          }}
        />
        <Text16Bold textStyle={{marginHorizontal: wp('2%')}}>
          {data.user.fname + ' ' + data.user.lname}
        </Text16Bold>
      </View>
      <Text14 textStyle={{color: theme.ui.black, marginTop: hp('1%')}}>
        {data.message}
      </Text14>
    </View>
  );
});

ListItem.propTypes = {
  data: PropTypes.object,
};
