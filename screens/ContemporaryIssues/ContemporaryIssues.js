import React from 'react';
import {View, TouchableOpacity, SafeAreaView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SearchBar from '../../components/SearchBar/SearchBar';
import styles from './Styles';
import ContemporaryCard from '../../components/ContemporaryCard/ContemporaryCard';
import {Text18Bold} from '../../components/Text';
import data from '../../assets/data/data';
import ItemsList from '../../components/ItemsList/ItemsList';
import {COLORS} from '../../shared/themes';

const ContemporaryIssues = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.goBack()}>
          <FontAwesome
            name={'chevron-left'}
            size={20}
            color={COLORS.sky_blue}
            style={{marginHorizontal: wp('1%')}}
          />
        </TouchableOpacity>
        <Text18Bold textStyle={styles.headingTxt}>
          Contemporary Issues
        </Text18Bold>
      </View>
      <View style={styles.underTop}>
        <SearchBar
          placeholder="Search Categories"
          styleSearch={{width: wp('75%')}}
        />
        <FontAwesome
          name={'heart'}
          size={25}
          color={COLORS.primary_blue}
          style={{marginHorizontal: hp('4%')}}
        />
      </View>

      <View style={{marginVertical: hp('2%')}}>
        <ItemsList data={data} renderItem={({item}) => <ContemporaryCard />} />
      </View>
    </SafeAreaView>
  );
};

export default ContemporaryIssues;
