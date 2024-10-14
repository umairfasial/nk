import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, ActivityIndicator} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Text20} from '../../components/Text';
import {COLORS} from '../../shared/themes';
import ButtonComp from '../../components/Button/ButtonComp';
import styles from './Styles';
import ImageComp from '../../components/ImageComp/ImageComp';
import http from '../../config/http';
import {CATEGORY_ENDPOINTS} from '../../config/api';
import {useRoute} from '@react-navigation/native';

const LastScreen = ({navigation}) => {
  const {params} = useRoute();
  const viewAssessment = params?.viewAssessment;
  const assessment_id = params?.assessment_id;
  const [obtainedScore, setObtainedScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    _sumbitAssessment();
  }, []);
  const _sumbitAssessment = async () => {
    let data = {
      assessment_id: assessment_id,
      assessment_input: viewAssessment,
    };
    const submit = await http.post(CATEGORY_ENDPOINTS.SUBMIT_ASSESSMENT, data);

    if (!submit.data) {
      setLoading(false);
    } else {
      setObtainedScore(submit?.data?.data?.obtain_marks);
      setTotalScore(submit?.data?.data?.total_marks);
      setLoading(false);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <ImageComp
          source={require('../../assets/images/completequiz.jpg')}
          imageStyle={styles.image}
        />
        <Text20 textStyle={{marginTop: hp('2%')}}>Assessment 1</Text20>
        <Text style={styles.completetxt}>Completed</Text>
        {loading ? (
          <View style={styles.indicator}>
            <ActivityIndicator size={'small'} color={COLORS.sky_blue} />
          </View>
        ) : (
          <Text
            style={
              styles.scoreTxt
            }>{`Your score is ${obtainedScore}/${totalScore}`}</Text>
        )}
        <View style={{marginTop: hp('5%')}}>
          <ButtonComp
            onPress={() => {
              navigation.navigate('Quiz');
            }}
            btnName="Continue"
            styleTxt={{color: COLORS.white}}
            styleBtn={styles.button}
          />
          <ButtonComp
            btnName="Take Assessment Again"
            styleBtn={[styles.button, {backgroundColor: COLORS.white}]}
            styleTxt={{color: COLORS.basic_black}}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LastScreen;
