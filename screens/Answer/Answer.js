import React from 'react';
import {View, SafeAreaView, TouchableOpacity, TextInput} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../shared/themes';
import styles from './Styles';
import {Text14, Text18Bold} from '../../components/Text';
import ImageComp from '../../components/ImageComp/ImageComp';

const Answer = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.topView}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            navigation.goBack();
          }}>
          <FontAwesome
            name={'chevron-left'}
            size={20}
            color={COLORS.sky_blue}
            style={{marginHorizontal: wp('1%')}}
          />
        </TouchableOpacity>
        <ImageComp
          source={require('../../assets/images/boy1.jpg')}
          imageStyle={styles.imageStyle}
        />

        <Text18Bold textStyle={styles.nametxt}>John Doe</Text18Bold>
      </SafeAreaView>
      <View style={{marginHorizontal: wp('5%')}}>
        <Text14 textStyle={styles.text14}>
          Lorem ipsum dolor sit amet, consetetur dfddf sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna
        </Text14>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.flex}>
          <View style={styles.imgView}>
            <ImageComp
              source={require('../../assets/images/boy1.jpg')}
              imageStyle={styles.imageStyle}
            />
          </View>
          <Text18Bold textStyle={styles.name}>John Doe</Text18Bold>
        </View>
        <Text14 textStyle={styles.questionTxt}>
          Lorem ipsum dolor sit amet, consetetur dfddf sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna
        </Text14>
        <View style={styles.lineView} />
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.flex}>
          <View style={styles.imgView}>
            <ImageComp
              source={require('../../assets/images/boy1.jpg')}
              imageStyle={styles.imageStyle}
            />
          </View>
          <Text18Bold textStyle={styles.name}>John Doe</Text18Bold>
        </View>
        <Text14 textStyle={styles.questionTxt}>
          Lorem ipsum dolor sit amet, consetetur dfddf sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna
        </Text14>
        <View style={styles.lineView} />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={{marginHorizontal: wp('2%')}}
          placeholder="Write a reply"
        />
      </View>
    </View>
  );
};

export default Answer;
