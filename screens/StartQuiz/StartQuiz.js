import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {ProgressBar, TextInput} from 'react-native-paper';
import {CheckBox} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './Styles';
import {COLORS} from '../../shared/themes';
import ButtonComp from '../../components/Button/ButtonComp';
import {
  Text12,
  Text14,
  Text16,
  Text18,
  Text18Bold,
} from '../../components/Text';
import {GradientBorderView} from '../../components/GradientBorderView/GradientBorderView';
import ImageComp from '../../components/ImageComp/ImageComp';
import {getQuestions} from '../../redux/reducers/categories/category.actions';
import {useDispatch} from 'react-redux';
import OctIcons from 'react-native-vector-icons/Octicons';
import {useRoute} from '@react-navigation/native';
import CountDown from 'react-native-countdown-component';
import {theme} from '../../shared/theme';
import http from '../../config/http';
import {CATEGORY_ENDPOINTS} from '../../config/api';
const StartQuiz = ({navigation}) => {
  const dispatch = useDispatch();
  const {params} = useRoute();
  const data = params?.data;

  const [nextQuestion, setNextQuestion] = useState(0);
  const [percent, setPercent] = useState(0);
  const [check1, setCheck1] = useState(true);
  const [timeOut, setTimeOut] = useState(false);
  const [selected, setselected] = useState('');
  const [answerText, setAnswerText] = useState('');
  const [answer, setAnswer] = useState([]);
  const [addMore, setAddMore] = useState(['']);
  const [viewAssessment, setviewAssessment] = useState({});

  useEffect(() => {
    navigation.addListener('focus', () => {
      dispatch(getQuestions());
    });
    dispatch(getQuestions());
  }, []);

  const handleAnswerSelection = (item, index) => {
    let oldQuestions = answer;
    let itemCopy = {
      ...oldQuestions[nextQuestion],
      answer: item?.label,
    };
    oldQuestions[nextQuestion] = itemCopy;
    setAnswer([...oldQuestions]);
    setselected(item.label);
  };

  useEffect(() => {
    navigation.addListener('focus', () => {
      defAnswers();
    });
    defAnswers();
  }, []);

  const defAnswers = async () => {
    const viewAssessments = await http.get(
      CATEGORY_ENDPOINTS.GET_VIEW_ASSESSMENT + `/${data.id}`,
    );
    const viewAssessment = viewAssessments?.data?.data?.assessment;
    let mQuestions = [];
    viewAssessment?.questions?.map(q => {
      let question = {...q, answer: null};
      mQuestions.push(question);
    });
    setAnswer(mQuestions);
    setviewAssessment(viewAssessment);
  };

  const renderOptions = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => handleAnswerSelection(item, index)}
        style={styles.answerView}>
        <View style={styles.outerCircle}>
          <CheckBox
            containerStyle={styles.checkBox}
            checkedIcon={
              <OctIcons
                name="primitive-dot"
                size={18}
                color={
                  selected === item.label
                    ? 'lightgreen'
                    : item.label == answer[nextQuestion]?.answer
                    ? 'lightgreen'
                    : COLORS.grey
                }
              />
            }
            uncheckedIcon={
              <OctIcons name="primitive-dot" size={18} color={'#fff'} />
            }
            checked={check1}
            onPress={() => handleAnswerSelection(item, index)}
          />
        </View>
        <Text16 textStyle={styles.answerOptions}>{item.label}</Text16>
      </TouchableOpacity>
    );
  };

  const [QuizApi, setQuizApi] = useState(false);

  return (
    <View style={styles.container}>
      <GradientBorderView style={styles.topView} containerStyle={styles.border}>
        <SafeAreaView>
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
              <View style={styles.quizView}>
                <Text18>Quiz</Text18>
                <Text12 textStyle={styles.title}>
                  {viewAssessment && viewAssessment?.title}
                </Text12>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </GradientBorderView>

      {viewAssessment?.questions?.length > 0 ? (
        <ScrollView>
          <>
            {QuizApi ? (
              <>
                <View style={styles.cardContainer}>
                  <View style={styles.questionView}>
                    <Text18Bold>
                      {' '}
                      {viewAssessment && viewAssessment?.title}
                    </Text18Bold>
                    <Text14 textStyle={styles.qNoTxt}>{`${
                      nextQuestion && nextQuestion + 1
                    }/${
                      viewAssessment && viewAssessment?.questions?.length
                    }`}</Text14>
                  </View>
                  <ProgressBar
                    progress={percent}
                    color={COLORS.sky_blue}
                    style={styles.progressBar}
                  />

                  <Text18Bold textStyle={styles.questionTxt}>
                    {viewAssessment?.questions &&
                      viewAssessment?.questions[nextQuestion]?.question}
                  </Text18Bold>
                  <View style={styles.assessment}>
                    {viewAssessment &&
                    viewAssessment?.questions?.length > 1 &&
                    viewAssessment?.questions[nextQuestion]?.type ===
                      'checkbox' ? (
                      <View>
                        {!answer[nextQuestion]?.isStop && (
                          <CountDown
                            style={{alignSelf: 'flex-end'}}
                            size={15}
                            until={parseInt(
                              viewAssessment?.questions[nextQuestion].time,
                            )}
                            onFinish={() => {
                              setTimeOut(true);
                              let oldQuestions = answer;
                              let itemCopy = {
                                ...oldQuestions[nextQuestion],
                                isStop: true,
                              };
                              oldQuestions[nextQuestion] = itemCopy;
                              setAnswer([...oldQuestions]);
                            }}
                            digitStyle={{
                              backgroundColor: '#FFF',
                              borderWidth: 1,
                              borderColor: theme.brand.primary,
                            }}
                            digitTxtStyle={{color: theme.brand.primary}}
                            timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
                            separatorStyle={{color: '#1CC625'}}
                            timeToShow={['S']}
                            timeLabels={{m: null, s: null}}
                            showSeparator
                          />
                        )}

                        {addMore.map((item, index) => {
                          return (
                            <TextInput
                              disabled={
                                answer[nextQuestion]?.isStop ? true : timeOut
                              }
                              style={{marginVertical: 5}}
                              placeholder="Write Answer here"
                              value={addMore[index]}
                              multiline
                              onChangeText={text => {
                                let addAnswerClone = addMore;
                                addAnswerClone[index] = text;
                                setAddMore(addAnswerClone);
                                let oldQuestions = answer;
                                let itemCopy = {
                                  ...oldQuestions[nextQuestion],
                                  answer: JSON.stringify(addAnswerClone),
                                };
                                oldQuestions[nextQuestion] = itemCopy;
                                setAnswer([...oldQuestions]);
                              }}
                            />
                          );
                        })}

                        {!timeOut && !answer[nextQuestion]?.isStop && (
                          <Text onPress={() => setAddMore([...addMore, ''])}>
                            Add More
                          </Text>
                        )}
                      </View>
                    ) : viewAssessment?.questions[nextQuestion]?.type ===
                      'text' ? (
                      <View>
                        <TextInput
                          placeholder="Write Answer here"
                          value={answer[nextQuestion]?.answer}
                          multiline
                          onChangeText={text => {
                            setAnswerText(text);
                            let oldQuestions = answer;
                            let itemCopy = {
                              ...oldQuestions[nextQuestion],
                              answer: text,
                            };
                            oldQuestions[nextQuestion] = itemCopy;
                            setAnswer([...oldQuestions]);
                          }}
                        />
                      </View>
                    ) : (
                      <View>
                        <FlatList
                          data={JSON.parse(
                            viewAssessment &&
                              viewAssessment?.questions[nextQuestion]?.options,
                          )}
                          renderItem={renderOptions}
                        />
                      </View>
                    )}
                  </View>
                </View>
                <View style={styles.buttonView}>
                  <ButtonComp
                    disabled={
                      viewAssessment?.questions[nextQuestion]?.type ===
                        'checkbox' && !timeOut
                    }
                    btnName={
                      viewAssessment?.questions?.length - 1 === nextQuestion
                        ? 'Finish'
                        : 'Next'
                    }
                    styleTxt={{color: COLORS.white}}
                    styleBtn={{
                      elevation: 5,
                      shadowOffset: {width: 0, height: 0},
                      shadowOpacity: 0.3,
                      shadowRadius: 2,
                      backgroundColor:
                        viewAssessment?.questions[nextQuestion]?.type ===
                          'checkbox' && !timeOut
                          ? COLORS.grey
                          : COLORS.sky_blue,
                    }}
                    onPress={() => {
                      setAddMore(['']);
                      setAnswerText('');
                      setTimeOut(false);
                      if (
                        viewAssessment?.questions?.length - 1 ===
                        nextQuestion
                      ) {
                        navigation.navigate('Last Screen', {
                          viewAssessment: answer,
                          assessment_id: viewAssessment?.id,
                        });
                      } else {
                        setNextQuestion(nextQuestion + 1);
                        setselected('');
                        let total = viewAssessment?.questions?.length - 1;
                        let next = nextQuestion + 1;
                        setPercent(next / total);
                      }
                    }}
                  />

                  {nextQuestion > 0 ? (
                    <ButtonComp
                      disabled={
                        viewAssessment?.questions[nextQuestion]?.type ===
                          'checkbox' && !timeOut
                      }
                      btnName={'Previous'}
                      styleTxt={{color: COLORS.white}}
                      styleBtn={{
                        elevation: 5,
                        shadowOffset: {width: 0, height: 0},
                        shadowOpacity: 0.3,
                        shadowRadius: 2,
                        backgroundColor:
                          viewAssessment?.questions[nextQuestion]?.type ===
                            'checkbox' && !timeOut
                            ? COLORS.grey
                            : COLORS.sky_blue,
                      }}
                      onPress={() => {
                        setNextQuestion(nextQuestion - 1);
                        let total = viewAssessment?.questions?.length - 1;
                        let next = nextQuestion - 1;
                        setPercent(next / total);
                      }}
                    />
                  ) : null}

                  <ButtonComp
                    onPress={() => navigation.goBack()}
                    btnName="Quit"
                    styleBtn={styles.button}
                    styleTxt={{color: COLORS.basic_black}}
                  />
                </View>
              </>
            ) : (
              <View style={styles.imageView}>
                <ImageComp
                  source={require('../../assets/images/quizStart.jpg')}
                  imageStyle={styles.image}
                />
                <Text style={styles.preparedTxt}>Be Prepared</Text>
                <Text style={styles.decpLineTxt}>
                  The quiz will start as soon as you hit the"Start Quiz" button.
                </Text>

                <View style={{marginTop: hp('10%')}}>
                  <ButtonComp
                    btnName="Start Quiz"
                    onPress={setQuizApi(!QuizApi)}
                  />
                </View>
              </View>
            )}
          </>
        </ScrollView>
      ) : (
        <View style={styles.questions}>
          <FontAwesome name="folder-open-o" size={24} color="black" />
          <Text18 textStyle={styles.questiontext}>
            No Questions Available
          </Text18>
        </View>
      )}
    </View>
  );
};

export default StartQuiz;
