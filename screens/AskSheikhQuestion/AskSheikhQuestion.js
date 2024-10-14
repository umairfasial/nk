import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  BackHandler,
  Text,
} from 'react-native';
import {useDispatch} from 'react-redux';
import ButtonComp from '../../components/Button/ButtonComp';
import {COLORS} from '../../shared/themes';
import styles from './Styles';
import {Text14} from '../../components/Text';
import {TopicsModel} from './TopicsModel';
import {
  addQuestion,
  getQuestions,
} from '../../redux/reducers/askASheikh/askASheikh.action';
import {useRoute} from '@react-navigation/native';
import {SheikhModel} from './SheikhModel';
import {ScrollView} from 'react-native';
import Header from '../../components/Header/Header';

const INITIAL_FORMDATA = {
  topic: null,
  sheikh: {},
  question: '',
  description: '',
};

const AskSheikhQuestion = ({navigation}) => {
  const {params} = useRoute();
  const [formData, setFormData] = useState(INITIAL_FORMDATA);
  const mySheikh = params?.selectedSheikh;
  const myTopic = params?.selectedTopic;
  const modelRef = useRef(null);
  const dispatch = useDispatch();
  const sheikhModelRef = useRef(null);
  const [sheikhName, setSheikhName] = useState('');
  const [topicItem, setTopicItem] = useState('');

  useEffect(() => {
    let backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      openTopicModel,
    );
    if (myTopic) {
      const _formData = {...formData};
      _formData.topic = myTopic;
      setFormData({..._formData});
    }

    return function () {
      backHandler.remove();
    };
  }, []);

  const onPressItem = topic => {
    setTopicItem(topic);
    const _formData = {...formData};
    _formData.topic = topic;
    setFormData({..._formData});
    openTopicModel();
  };

  const onChangeInput = (key, value) => {
    const _formData = {...formData};
    _formData[key] = value;

    setFormData({..._formData});
  };

  const openTopicModel = () => {
    if (!modelRef.current) return;

    modelRef.current.toggleModel();
  };

  const goBack = () => {
    if (myTopic) {
      dispatch(getQuestions(myTopic));
    } else {
      dispatch(getQuestions(topicItem));
    }
  };

  const onSubmitForm = async () => {
    if (!formData.topic || !formData.question)
      return alert('Please fill the required fields!');

    await dispatch(
      addQuestion({
        ...formData,
        category_id: formData.topic.category_id,
      }),
    );

    setFormData(INITIAL_FORMDATA);
    goBack();
  };

  const onPressSheikh = val => {
    openSheikhModel();
    setSheikhName(val?.fname + ' ' + val?.lname);
  };

  const openSheikhModel = () => {
    if (!sheikhModelRef.current) return;

    sheikhModelRef.current.toggleModel();
  };

  return (
    <>
      <View style={styles.container}>
        <SafeAreaView style={styles.topView}>
          <Header title={'Ask The Sheikh'} />
        </SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Topic</Text>
            <TouchableOpacity
              activeOpacity={0.6}
              disabled={myTopic?.title}
              style={styles.pickerStyle}
              onPress={openTopicModel}>
              <Text14>
                {formData?.topic
                  ? formData?.topic.title
                  : myTopic?.title
                  ? myTopic?.title
                  : 'Select Topic'}
              </Text14>
            </TouchableOpacity>
            <Text style={styles.sheikhtext}>Select Sheikh</Text>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={openSheikhModel}
              disabled={mySheikh?.fname || mySheikh?.lname ? true : false}
              style={styles.pickerStyle}>
              <Text14>
                {mySheikh?.fname || mySheikh?.lname
                  ? mySheikh?.fname + ' ' + mySheikh?.lname
                  : sheikhName
                  ? sheikhName
                  : 'Select Sheikh (Optional)'}
              </Text14>
            </TouchableOpacity>
            <Text style={styles.sheikhtext}>Question</Text>
            <View style={styles.questionTxt}>
              <TextInput
                placeholder="Write your question here..."
                style={styles.input}
                onChangeText={e => onChangeInput('question', e)}
                multiline={true}
              />
            </View>
            <Text style={styles.sheikhtext}>Details</Text>
            <View style={styles.descriptionTxt}>
              <TextInput
                placeholder="Question Details (Optional)"
                style={styles.input}
                onChangeText={e => onChangeInput('description', e)}
                multiline={true}
              />
            </View>

            <View style={{alignItems: 'center'}}>
              <ButtonComp
                btnName="Post"
                styleTxt={{color: COLORS.white}}
                styleBtn={styles.button}
                onPress={onSubmitForm}
              />
              <ButtonComp
                onPress={() => navigation.goBack()}
                btnName="Cancel"
                styleBtn={[styles.button, {backgroundColor: COLORS.white}]}
                styleTxt={{color: COLORS.basic_black}}
              />
            </View>
          </View>
        </ScrollView>
      </View>
      <TopicsModel
        modelRef={modelRef}
        onPressItem={item => onPressItem(item)}
      />
      <SheikhModel
        sheikhModelRef={sheikhModelRef}
        onPressSheikh={item => onPressSheikh(item)}
      />
    </>
  );
};

export default AskSheikhQuestion;
