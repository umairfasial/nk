import React, {useEffect} from 'react';
import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CourseNameCard from '../../components/CourseNameCard/CourseNameCard';
import styles from './Styles';
import {Text16} from '../../components/Text';
import ItemsList from '../../components/ItemsList/ItemsList';
import {useDispatch, useSelector} from 'react-redux';
import {CATEGORY_STATE} from '../../redux/reducers/categories/getState';
import {getListAssement} from '../../redux/reducers/categories/category.actions';
import NoContent from '../../components/NoContent';
import Header from '../../components/Header/Header';

const QuizScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const listAssessment = useSelector(CATEGORY_STATE.listAssessment);

  useEffect(() => {
    navigation.addListener('focus', () => {
      dispatch(getListAssement());
    });
    dispatch(getListAssement());
  }, []);

  const handleRandomQuiz = () => {
    var id = Math.floor(Math.random() * listAssessment.length);
    var value = listAssessment[id];
    navigation.navigate('Start Quiz', {data: value});
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Quiz" />
      {listAssessment.length ? (
        <View style={styles.content}>
          <Text16 textStyle={styles.topic}>Please Select a Topic</Text16>
          <TouchableOpacity activeOpacity={0.6} onPress={handleRandomQuiz}>
            <Text16 textStyle={styles.randomTxt}>Random</Text16>
          </TouchableOpacity>
        </View>
      ) : null}

      <View style={styles.list}>
        {listAssessment.length ? (
          <ItemsList
            data={listAssessment}
            renderItem={({item}) => {
              return (
                <CourseNameCard
                  cards={item}
                  title={item.title}
                  onPress={() => {
                    navigation.navigate('Start Quiz', {data: item});
                  }}
                />
              );
            }}
          />
        ) : (
          <NoContent title={'Topics'} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default QuizScreen;
