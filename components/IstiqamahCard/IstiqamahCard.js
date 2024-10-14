import React from 'react';
import {View} from 'react-native';
import {Text15} from '../../components/Text';
import {COLORS} from '../../shared/themes';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './Styles';
import ImageComp from '../ImageComp/ImageComp';

const IstiqamahCard = ({data}) => {
  return (
    <View style={styles.undernamazContainer}>
      <View style={styles.container}>
        <Text15 textStyle={{color: COLORS.basic_black}}>Asar</Text15>
        <ImageComp
          source={require('../../assets/images/checkCircle_active.png')}
          imageStyle={styles.iconChecked}
        />
      </View>
      <View style={styles.lineTxt} />
    </View>
  );
};

export default IstiqamahCard;
