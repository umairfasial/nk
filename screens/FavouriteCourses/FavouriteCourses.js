import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import styles from './Styles';
import ContemporaryCard from '../../components/ContemporaryCard/ContemporaryCard';
import {COURSES_STATE} from '../../redux/reducers/courses/getState';
import ItemsList from '../../components/ItemsList/ItemsList';
import ImageComp from '../../components/ImageComp/ImageComp';
import {COLORS} from '../../shared/themes';

const FavouriteCourses = ({navigation}) => {
  const favoriteCourses = useSelector(COURSES_STATE.favoriteCourses);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.flex}>
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
          <Text style={styles.fCoursesTxt}>Favourite Courses</Text>
        </View>
        <TouchableOpacity activeOpacity={0.6}>
          <ImageComp
            source={require('../../assets/images/add.png')}
            imageStyle={{width: 15, height: 15}}
          />
        </TouchableOpacity>
      </View>

      <ItemsList
        style={{marginTop: hp('2%')}}
        data={favoriteCourses}
        keyExtractor={({item, index}) => index.toString()}
        renderItem={({item, index}) => <ContemporaryCard />}
      />
    </SafeAreaView>
  );
};

export default FavouriteCourses;
