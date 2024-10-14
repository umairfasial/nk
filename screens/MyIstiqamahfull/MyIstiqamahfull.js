import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import styles from './Styles';
import MyIstiqamahFullTab from '../MyIstiqamahFullTab/MyIstiqamahFullTab';
import {Text20} from '../../components/Text';
import ImageComp from '../../components/ImageComp/ImageComp';
import {COLORS} from '../../shared/themes';

const MyIstiqamah = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.Card}>
          <FontAwesome
            name={'chevron-left'}
            size={20}
            color={COLORS.sky_blue}
            style={{marginHorizontal: wp('1%')}}
          />
          <Text20 textStyle={styles.back}>Back</Text20>
        </TouchableOpacity>

        <View style={styles.Card}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              navigation.navigate('Schedule-Ibadah');
            }}>
            <ImageComp
              source={require('../../assets/images/add.png')}
              imageStyle={styles.iconsStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.Istiqamah}>My Istiqamah</Text>
      <MyIstiqamahFullTab />
    </View>
  );
};

export default MyIstiqamah;
