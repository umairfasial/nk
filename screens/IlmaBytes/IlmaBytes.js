import React from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import QuestionCard from '../../components/QuestionCard/QuestionCard';
import {Text20} from '../../components/Text';
import styles from './Styles';
import ItemsList from '../../components/ItemsList/ItemsList';
import SearchBar from '../../components/SearchBar/SearchBar';
import {useSelector} from 'react-redux';
import {ILMA_STATE} from '../../redux/reducers/ilma/getState';
import {useState} from 'react';
import {COLORS} from '../../shared/themes';

const IlmaBytes = ({navigation}) => {
  const illmaBytes = useSelector(ILMA_STATE.ilmaBytes);
  const [search, setSearch] = useState('');
  const [searchedData, setSearchedData] = useState();

  const SearchFilterFunction = text => {
    const newData = shayookh.filter(function (item) {
      const itemData = item?.title
        ? item.title.toUpperCase()
        : ''.toUpperCase();
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });

    if (text == '') {
      setSearch('');
    } else if (newData?.length > 0) {
      setSearch(text);
      setSearchedData(newData);
    } else {
      const descData = shayookh.filter(function (item) {
        const itemData = item?.description
          ? item.description.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();

        return itemData.indexOf(textData) > -1;
      });

      setSearch(text);
      setSearchedData(descData);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => navigation.goBack()}
        style={styles.topView}>
        <FontAwesome
          name={'chevron-left'}
          size={20}
          color={COLORS.sky_blue}
          style={{marginHorizontal: wp('1%')}}
        />

        <Text20 textStyle={styles.ilmaText}>Ilma Bytes</Text20>
      </TouchableOpacity>
      <SearchBar
        styleSearch={styles.search}
        placeholder="Search"
        onChangeText={txt => SearchFilterFunction(txt)}
      />

      <ItemsList
        data={illmaBytes}
        numColumns={2}
        renderItem={({item}) => (
          <QuestionCard
            title={item.title}
            desc={item?.description}
            type={item?.type}
            onPress={() => {
              item?.type === 'text'
                ? navigation.navigate('Ilma-Byte-Details', {
                    ilmaDetails: item,
                  })
                : navigation.navigate('Pdf', {
                    item: item,
                  });
            }}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default IlmaBytes;
