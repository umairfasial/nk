import React from 'react';
import {View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import SearchBar from '../../components/SearchBar/SearchBar';
import CourseNameCard from '../../components/CourseNameCard/CourseNameCard';
import styles from './Styles';
import {CATEGORY_STATE} from '../../redux/reducers/categories/getState';
import {getQuestions} from '../../redux/reducers/askASheikh/askASheikh.action';
import ItemsList from '../../components/ItemsList/ItemsList';
import {useState} from 'react';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {getCategories} from '../../redux/reducers/categories/category.actions';
import {getHTTPSURL} from '../../utils/functions';

const TopicsScreen = () => {
  const navigation = useNavigation();
  const topics = useSelector(CATEGORY_STATE.categories);
  const defaultImages = useSelector(CATEGORY_STATE.defaultImages);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [searchedData, setSearchedData] = useState();
  const [selectedTopic, setSelectedTopic] = useState('');

  useEffect(() => {
    navigation.addListener(
      'focus',
      () => {
        dispatch(getCategories());
      },
      [],
    );
  }, []);

  const onTopicSelect = async topic => {
    setSelectedTopic(topic?.title);
    dispatch(getQuestions(topic));
  };
  const SearchFilterFunction = async val => {
    if (topics?.length) {
      const newData = topics.filter(item => {
        const itemData = item?.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = val.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      if (val == '') {
        setSearch('');
      } else {
        setSearch(val);
        setSearchedData(newData);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <SearchBar
          placeholder="Search"
          styleSearch={{width: wp('90%')}}
          onChangeText={SearchFilterFunction}
          value={search}
        />
      </View>

      {search ? (
        <ItemsList
          data={searchedData}
          keyExtractor={(item, index) => index?.toString()}
          renderItem={({item, index}) => (
            <View style={{alignSelf: 'center'}}>
              <CourseNameCard
                title={item?.title}
                key={index?.toString()}
                image={{
                  uri:
                    defaultImages !== undefined
                      ? getHTTPSURL(defaultImages?.defaultImage?.file)
                      : require('../../assets/images/studyingIslamic.png'),
                }}
                onPress={() => onTopicSelect(item)}
                selectedTitle={selectedTopic}
              />
            </View>
          )}
        />
      ) : topics && topics?.length ? (
        <ItemsList
          style={styles.list}
          data={
            search == ''
              ? topics.sort((a, b) => a.title.localeCompare(b.title))
              : searchedData
          }
          keyExtractor={(item, index) => index?.toString()}
          renderItem={({item, index}) => {
            if (`${item?.title}`?.toLowerCase() !== 'uncategorized') {
              return (
                <CourseNameCard
                  title={item?.title}
                  key={index?.toString()}
                  image={{
                    uri:
                      defaultImages !== undefined
                        ? getHTTPSURL(defaultImages?.defaultImage?.file)
                        : require('../../assets/images/studyingIslamic.png'),
                  }}
                  onPress={() => onTopicSelect(item)}
                  selectedTitle={selectedTopic}
                />
              );
            }
            return null;
          }}
        />
      ) : (
        <></>
      )}
    </View>
  );
};

export default TopicsScreen;
