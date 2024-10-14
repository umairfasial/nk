import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SearchBar from '../../components/SearchBar/SearchBar';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {theme} from '../../shared/theme';
import SearchCover from '../../components/SearchCover/SearchCover';
import PopularSearchList from '../PopularSearchList/PopularSearchList';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Search = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={[styles.profileImg, {backgroundColor: theme.ui.gray3}]}>
          <IonIcons name="person" size={15} />
        </TouchableOpacity>
        <SearchBar />
        <TouchableOpacity activeOpacity={0.6} style={styles.profileImg}>
          <AntDesign name="setting" size={20} />
        </TouchableOpacity>
      </View>
      <SearchCover />
      <View style={styles.popularContent}>
        <Text style={styles.heading}>Popular for you</Text>
        <PopularSearchList />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  profileImg: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  popularContent: {
    padding: '5%',
  },
  heading: {
    fontWeight: '700',
    color: theme.ui.black,
    fontSize: hp('2.5%'),
  },
});
