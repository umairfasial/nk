import React from 'react';
import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS} from '../../shared/themes';
import ItemsList from '../../components/ItemsList/ItemsList';
import {Text12, Text18} from '../../components/Text';
import styles from './Styles';
import QuestionCard from '../../components/OldQuestionsCard/OldQuestionsCard';
import {ASK_A_SHEIKH_STATE} from '../../redux/reducers/askASheikh/getState';
import * as RootNavigation from '../../navigation/RootNavigator';
import {setSelectedQuestion} from '../../redux/reducers/askASheikh/askASheikh.action';
import {useRoute} from '@react-navigation/native';
import NoContent from '../../components/NoContent';

const AskAShiekhQuestions = ({navigation}) => {
  const {params} = useRoute();
  const myitem = params?.item;
  const myPrevTopic = params?.topicItem;
  const topic = useSelector(ASK_A_SHEIKH_STATE.topic);
  const dispatch = useDispatch();

  const onQuestionPress = question => {
    dispatch(setSelectedQuestion(question));
    return RootNavigation.navigate('askASheikh_Discussions', {
      selectedTopic: myitem,
    });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.topView}>
        <View style={styles.headView}>
          <View style={styles.contentContainer}>
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
            <View style={styles.header}>
              <Text18
                textStyle={{
                  color: COLORS.sky_blue,
                }}>
                {topic?.title ? topic?.title : myPrevTopic}
              </Text18>
              <Text12 textStyle={styles.questions}>
                {topic.questions?.length} Past Questions
              </Text12>
            </View>
          </View>
        </View>
      </SafeAreaView>

      <View style={styles.card}>
        {topic?.questions.length ? (
          <ItemsList
            data={topic?.questions}
            keyExtractor={index => index?.toString()}
            renderItem={({item}) => {
              return (
                <QuestionCard
                  user={item?.user}
                  question={item}
                  onPress={() => onQuestionPress(item)}
                />
              );
            }}
          />
        ) : (
          <NoContent title={'Questions'} />
        )}
      </View>
    </View>
  );
};

export default AskAShiekhQuestions;
