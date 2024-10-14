import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../../shared/themes';
import {theme} from '../../../shared/theme';
import {useDispatch, useSelector} from 'react-redux';
import {
  getAllIstiqamah,
  updateToDo,
} from '../../../redux/reducers/Istiqamah/istiqamah.actions';
import RenderIstiqamah from './RenderIstiqamah';
import {ISTIQAMAS_STATE} from '../../../redux/reducers/Istiqamah/getState';
import NoContent from '../../../components/NoContent';
import {Text14} from '../../../components/Text';

const MyIstiqamah = ({navigation}) => {
  const dispatch = useDispatch();
  const istiqamas = useSelector(ISTIQAMAS_STATE.istiqamas);
  const istiqamasNotDone = istiqamas.filter(item => item.status === false);

  useEffect(() => {
    navigation.addListener('focus', () => {
      dispatch(getAllIstiqamah());
    });
    dispatch(getAllIstiqamah());
  }, []);

  const handleTodoPress = async item => {
    const data = {
      ...item,
      status: !item.status,
    };

    Alert.alert(
      'Completed Istiqamah',
      'Are you sure you completed this Istiqamah.',
      [
        {
          text: 'No',
          onPress: () => console.log('No'),
        },
        {text: 'Yes', onPress: async () => dispatch(updateToDo(data, item.id))},
      ],
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.namazContainer}>
        {istiqamasNotDone.length ? (
          istiqamasNotDone.map((item, index) => {
            if (index < 2 && item?.title) {
              if (!item.status) {
                return (
                  <RenderIstiqamah
                    key={index}
                    item={item}
                    onPress={() => handleTodoPress(item)}
                    selectedItem={item.status}
                    index={index}
                    home={true}
                  />
                );
              }
            }
          })
        ) : (
          <View
            style={{
              marginTop: '10%',
              alignSelf: 'center',
            }}>
            <NoContent title={'Istiqamah'} customStyle={{marginTop: 1}} />
            <Text
              onPress={() => {
                navigation.navigate('Schedule-Ibadah');
              }}
              style={styles.addtext}>
              Add Istiqamah List
            </Text>
          </View>
        )}

        {istiqamasNotDone.length > 0 ? (
          <>
            <TouchableOpacity
              activeOpacity={0.6}
              style={{alignSelf: 'center'}}
              onPress={() => {
                navigation.navigate('Schedule-Ibadah');
              }}>
              <Text style={styles.addtext}>Add Istiqamah List</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              style={{alignSelf: 'center', marginTop: 5}}
              onPress={() => {
                navigation.navigate('Istiqamah');
              }}>
              <Text14 textStyle={{color: COLORS.sky_blue}}>View All</Text14>
            </TouchableOpacity>
          </>
        ) : null}
      </View>
    </View>
  );
};

export default MyIstiqamah;

const styles = StyleSheet.create({
  istiqamahView: {
    marginHorizontal: wp('4%'),
    marginVertical: hp('1%'),
    flexDirection: 'row',
  },
  viewAllTxt: {
    fontFamily: 'Roboto-Medium',
    fontSize: 13,
    color: COLORS.sky_blue,
    fontWeight: 'bold',
  },
  ilmaBytesTxt: {
    fontSize: 16,
    color: COLORS.basic_black,
  },
  namazContainer: {
    marginHorizontal: wp('3%'),
    height: hp('40%'),
    width: wp('94%'),
    borderRadius: 4,
  },
  prayersTxt: {
    fontFamily: 'Roboto-Regular',
    fontSize: hp('2%'),
    color: COLORS.basic_black,
  },
  namazTxt: {
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    color: COLORS.basic_black,
  },
  undernamazContainer: {
    justifyContent: 'space-between',
    marginHorizontal: wp('6%'),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('1%'),
  },
  iconChecked: {
    height: 40,
    width: 40,
    marginLeft: hp('17%'),
    marginTop: hp('0.5'),
  },
  viewDetailsTxt: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: COLORS.sky_blue,
    marginTop: hp('1%'),
  },
  underLine: {
    marginTop: '2%',
    borderBottomWidth: 0.5,
    borderBottomColor: theme.ui.gray,
  },
  addtext: {
    color: COLORS.sky_blue,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '2%',
  },
});
