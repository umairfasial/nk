import React from 'react';
import {View, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './Styles';
import {Text14, Text14Bold, Text16, Text20Bold} from '../../components/Text';
import {COLORS} from '../../shared/themes';
import {GradientBorderView} from '../../components/GradientBorderView/GradientBorderView';
import ImageComp from '../../components/ImageComp/ImageComp';
import {useRoute} from '@react-navigation/native';
import HTML from 'react-native-render-html';
import {getHTTPSURL} from '../../utils/functions';

const ShayookhDetails = ({navigation}) => {
  const {params} = useRoute();
  const profile = params?.sheikhData;
  const bioContent = profile?.bio ? profile.bio : 'No Bio Mentioned';
  const tagsStyles = {
    p: {color: COLORS.sky_blue},
  };
  return (
    <View style={styles.container}>
      <GradientBorderView
        style={styles.underContainer}
        containerStyle={styles.border}>
        <SafeAreaView style={styles.contentContainer}>
          <View style={styles.iconContainer}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.iconView}
              onPress={() => navigation.goBack()}>
              <ImageComp
                source={require('../../assets/images/arrow.png')}
                imageStyle={styles.arrow}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.imageView}>
            {profile?.image ? (
              <ImageComp
                source={{uri: getHTTPSURL(profile?.image)}}
                imageStyle={styles.image}
              />
            ) : (
              <ImageComp
                source={require('../../assets/images/default_user.png')}
                imageStyle={styles.image}
              />
            )}
          </View>
          <Text20Bold textStyle={styles.name}>
            {profile?.fname && profile?.lname
              ? profile?.fname + ' ' + profile?.lname
              : 'Name Here'}
          </Text20Bold>
          {profile?.bio ? (
            <HTML source={{html: bioContent}} tagsStyles={tagsStyles} />
          ) : (
            <Text14 style={{color: COLORS.sky_blue}}>No Bio Mentioned</Text14>
          )}
        </SafeAreaView>
      </GradientBorderView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: hp('5%')}}>
          <View style={{marginHorizontal: wp('10%')}}>
            <Text14Bold>Education</Text14Bold>
            <Text16 textStyle={styles.infoTxt}>No Education mentioned</Text16>
          </View>
          <View style={styles.lineView} />

          <View style={styles.field}>
            <Text14Bold>Institute</Text14Bold>
            <Text16 textStyle={styles.infoTxt}>No Institute mentioned</Text16>
          </View>
          <View style={styles.lineView} />

          <View style={styles.field}>
            <Text14Bold>Specialization</Text14Bold>
            <Text16 textStyle={styles.infoTxt}>
              No Specialization mentioned
            </Text16>
          </View>
          <View style={styles.lineView} />

          <View style={styles.field}>
            <Text14Bold>Details</Text14Bold>
            <Text16 textStyle={styles.infoTxt}>No Details mentioned</Text16>
          </View>
          <View style={styles.lineView} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ShayookhDetails;
