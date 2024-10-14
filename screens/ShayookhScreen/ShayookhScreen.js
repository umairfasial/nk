import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import SearchBar from '../../components/SearchBar/SearchBar';
import styles from './Styles';
import SheikhsCard from '../../components/SheikhsCard/SheikhsCard';
import ItemsList from '../../components/ItemsList/ItemsList';
import {ASK_A_SHEIKH_STATE} from '../../redux/reducers/askASheikh/getState';
import {useEffect} from 'react';
import {getShayookh} from '../../redux/reducers/askASheikh/askASheikh.action';
import NoContent from '../../components/NoContent';

const ShayookhScreen = ({navigation}) => {
  const shayookh = useSelector(ASK_A_SHEIKH_STATE.shayookh);
  const [search, setSearch] = useState('');
  const [searchedData, setSearchedData] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    navigation.addListener('focus', () => {
      dispatch(getShayookh());
    });
  }, []);
  const SearchFilterFunction = text => {
    const newData = shayookh.filter(function (item) {
      const itemData = item?.fname
        ? item.fname.toUpperCase()
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
      const lnameData = shayookh.filter(function (item) {
        const itemData = item?.lname
          ? item.lname.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();

        return itemData.indexOf(textData) > -1;
      });

      if (lnameData?.length > 0) {
        setSearch(text);
        setSearchedData(lnameData);
      } else {
        const bioData = shayookh.filter(function (item) {
          const itemData = item?.bio
            ? item.bio.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();

          return itemData.indexOf(textData) > -1;
        });
        setSearch(text);
        setSearchedData(bioData);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <SearchBar
          placeholder="Search"
          styleSearch={{width: wp('94%')}}
          onChangeText={txt => SearchFilterFunction(txt)}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {shayookh.length ? (
            <ItemsList
              data={search == '' ? shayookh : searchedData}
              columnWrapperStyle={{
                justifyContent:
                  shayookh.length % 2 == 0 ? 'space-between' : 'flex-start',
              }}
              numColumns={2}
              renderItem={({item}) => (
                <SheikhsCard
                  data={item}
                  onPress={() =>
                    navigation.navigate('Shayookh-Details', {sheikhData: item})
                  }
                />
              )}
            />
          ) : (
            <NoContent title={'Sheikh'} />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default ShayookhScreen;
