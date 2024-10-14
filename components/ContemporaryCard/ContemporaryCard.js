import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ImageComp from '../ImageComp/ImageComp';
import {Text13, Text16Bold} from '../Text';
import styles from './Styles';

const ContemporaryCard = props => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <View style={{marginHorizontal: wp('3%')}}>
          <ImageComp
            source={require('../../assets/images/sukoon.jpg')}
            imageStyle={styles.image}
          />
        </View>
        <View style={{width: wp('85%')}}>
          <Text16Bold textStyle={styles.headingTxt}>
            Faith in Practice
          </Text16Bold>
          <Text13 textStyle={styles.description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.{' '}
          </Text13>

          <View style={styles.txtContainer}>
            <View style={styles.imageView}>
              <ImageComp
                source={require('../../assets/images/muslim_inactive.png')}
                imageStyle={styles.imginactive}
              />
              <Text13 textStyle={styles.nameTxt}>Natasha Kamaluddin</Text13>
            </View>
            <TouchableOpacity activeOpacity={0.6} style={styles.activeView}>
              <ImageComp
                source={require('../../assets/images/like_active.png')}
                imageStyle={styles.imgactive}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ContemporaryCard;
