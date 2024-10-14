import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Text,
  TextInput,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import {Text14, Text16Bold} from '../../components/Text';
import styles from './Styles';
import {ASK_A_SHEIKH_STATE} from '../../redux/reducers/askASheikh/getState';
import {COLORS} from '../../shared/themes';
import {useRoute} from '@react-navigation/native';
import {TopicsModel} from '../AskSheikhQuestion/TopicsModel';
import {SheikhModel} from '../AskSheikhQuestion/SheikhModel';
import HTML from 'react-native-render-html';

const QuestionsDetails = ({navigation}) => {
  const {params} = useRoute();
  const myTopic = params?.selectedTopic;
  const mySheikh = params?.selectedSheikh;
  const question = useSelector(ASK_A_SHEIKH_STATE.selectedQuestion);
  const listRef = useRef();
  const modelRef = useRef(null);
  const sheikhModelRef = useRef(null);
  const [sheikhName, setSheikhName] = useState('');
  const [topicName, setTopicName] = useState('');

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    scrollToBottom();
  }, [listRef]);

  const scrollToBottom = () => {
    if (!listRef.current) return;
    listRef.current.scrollToEnd({animated: true});
  };

  const onPressItem = topic => {
    openTopicModel();
    setTopicName(topic?.desc);
  };

  const onPressSheikh = val => {
    openSheikhModel();
    setSheikhName(val?.fname + ' ' + val?.lname);
  };

  const openTopicModel = () => {
    if (!modelRef.current) return;

    modelRef.current.toggleModel();
  };

  const openSheikhModel = () => {
    if (!sheikhModelRef.current) return;

    sheikhModelRef.current.toggleModel();
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.topView}>
        <View style={styles.headView}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={goBack}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesome
              name={'chevron-left'}
              size={20}
              color={COLORS.sky_blue}
              style={{marginHorizontal: wp('1%')}}
            />

            <View
              style={{
                marginLeft: wp('3%'),
                paddingBottom: 15,
                marginTop: hp('1%'),
                alignItems: 'center',
              }}>
              <Text16Bold
                numberOfLines={1}
                textStyle={{width: wp('70%'), color: COLORS.sky_blue}}>
                {question?.question}
              </Text16Bold>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginHorizontal: wp('10%'),
            marginTop: hp('2%'),
          }}>
          <Text
            style={{color: COLORS.sky_blue, fontSize: 16, fontWeight: 'bold'}}>
            Topic
          </Text>
          <TouchableOpacity
            onPress={openTopicModel}
            disabled={myTopic ? true : false}
            style={styles.pickerStyle}
            activeOpacity={0.6}>
            <Text14 style={{color: COLORS.sky_blue}}>
              {myTopic?.title
                ? myTopic?.title
                : topicName
                ? topicName
                : 'Select Topic'}
            </Text14>
          </TouchableOpacity>

          {question?.sheikh_id ? (
            <TouchableOpacity
              onPress={openSheikhModel}
              disabled={mySheikh ? true : false}
              style={styles.pickerStyle}
              activeOpacity={0.6}>
              <Text14 style={{color: COLORS.sky_blue}}>
                {mySheikh
                  ? mySheikh.fname + ' ' + mySheikh.lname
                  : sheikhName
                  ? sheikhName
                  : 'Select Sheikh (Optional)'}
              </Text14>
            </TouchableOpacity>
          ) : null}

          <Text
            style={{color: COLORS.sky_blue, fontSize: 16, fontWeight: 'bold'}}>
            Question
          </Text>
          <View style={styles.questionTxt}>
            <TextInput
              value={question?.question}
              editable={false}
              placeholder="Question"
              style={{
                marginHorizontal: wp('2%'),
                textAlignVertical: 'top',
                marginTop: hp('1%'),
                color: COLORS.sky_blue,
              }}
              multiline={true}
            />
          </View>
          <Text
            style={{color: COLORS.sky_blue, fontSize: 16, fontWeight: 'bold'}}>
            Details
          </Text>
          <View style={styles.descriptionTxt}>
            <TextInput
              value={question?.description}
              editable={false}
              placeholder="Details (Optionnal)"
              style={{
                marginHorizontal: wp('2%'),
                textAlignVertical: 'top',
                marginTop: hp('1%'),
                color: COLORS.sky_blue,
              }}
              multiline={true}
            />
          </View>
          <Text
            style={{color: COLORS.sky_blue, fontSize: 16, fontWeight: 'bold'}}>
            Answer
          </Text>
          <View
            style={{
              ...styles.descriptionTxt,
              paddingVertical: 15,
              paddingHorizontal: 10,
            }}>
            {question?.discussions[0]?.message ? (
              <HTML
                source={{html: question?.discussions[0]?.message}}
                tagsStyles={{
                  p: {color: COLORS.sky_blue},
                }}
              />
            ) : (
              <Text style={{color: COLORS.sky_blue}}>No answer yet</Text>
            )}
          </View>
        </View>
      </ScrollView>
      <TopicsModel
        modelRef={modelRef}
        onPressItem={item => onPressItem(item)}
      />
      <SheikhModel
        sheikhModelRef={sheikhModelRef}
        onPressSheikh={item => onPressSheikh(item)}
      />
    </View>
  );
};

export default QuestionsDetails;
