import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {theme} from '../../../shared/theme';
import {COLORS} from '../../../shared/themes';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Swipeable from 'react-native-swipeable';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {AUTH_STATE} from '../../../redux/reducers/auth/getState';
import {useSelector} from 'react-redux';
import {
  deleteToDo,
  updateToDo,
} from '../../../redux/reducers/Istiqamah/istiqamah.actions';
import {Image} from 'react-native';
import {getHTTPSURL} from '../../../utils/functions';

export default function RenderIstiqamah({
  item,
  onPress,
  selectedItem,
  index,
  home,
  key,
}) {
  const user = useSelector(AUTH_STATE.user);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const swipeRef = Object.create(null);

  const {title, status, id} = item;
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
  const deletTodo = async id => {
    Alert.alert(
      'Delete Istiqamah',
      'Are you sure you want to delete this Istiqamah?',
      [
        {
          text: 'No',
          onPress: () => console.log(' '),
        },
        {text: 'Yes', onPress: () => dispatch(deleteToDo(id))},
      ],
    );
  };

  if (home) {
    return (
      <TouchableOpacity key={key} onPress={onPress}>
        <View style={styles.undernamazContainer}>
          <View style={styles.flexrow}>
            <View style={styles.ImageContainer}>
              <Image
                source={
                  user?.image === null
                    ? require('../../../assets/images/default_user.png')
                    : user.image
                }
                style={styles.image}
              />
            </View>
            <Text
              style={{
                ...styles.prayersTxt,
                color: !item.status ? COLORS.sky_blue : COLORS.grey,
              }}>
              {title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.6}
            style={styles.istiqamah}>
            <AntDesign
              name="checkcircleo"
              size={hp('3%')}
              color={selectedItem ? COLORS.sky_blue : theme.ui.gray2}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.underLine} />
      </TouchableOpacity>
    );
  } else {
    if (!swipeRef[index]) swipeRef[index] = React.createRef();
    return (
      <Swipeable
        key={key}
        disabled={item.status}
        ref={swipeRef[index]}
        rightButtons={[
          <TouchableOpacity
            style={{flex: 1, justifyContent: 'center', marginLeft: 20}}
            activeOpacity={0.6}
            onPress={() => {
              Object.values(swipeRef)
                .filter(s => s.current)
                .forEach(s => s.current.recenter());
              navigation.navigate('Schedule-Ibadah', {
                mode: 'edit',
                item: item,
              });
            }}>
            <Text style={{color: 'green', fontWeight: 'bold'}}>Edit</Text>
          </TouchableOpacity>,
          <TouchableOpacity
            style={{flex: 1, justifyContent: 'center', marginLeft: 20}}
            activeOpacity={0.6}
            onPress={() => {
              Object.values(swipeRef)
                .filter(s => s.current)
                .forEach(s => s.current.recenter());
              deletTodo(item.id);
            }}>
            <Text style={{color: 'red', fontWeight: 'bold'}}>Delete</Text>
          </TouchableOpacity>,
        ]}>
        <TouchableOpacity
          disabled={item.status}
          style={styles.undernamazContainer}
          onPress={() => handleTodoPress(item)}>
          <View style={styles.flexrow}>
            <View style={styles.ImageContainer}>
              <Image
                source={
                  user?.image === null
                    ? require('../../../assets/images/default_user.png')
                    : getHTTPSURL(user.image)
                }
                style={styles.image}
              />
            </View>
            <Text
              style={{
                ...styles.prayersTxt,
                color: !item.status ? COLORS.sky_blue : COLORS.grey,
              }}
              numberOfLines={1}>
              {title}
            </Text>
          </View>
          {!status && (
            <TouchableOpacity
              onPress={() => handleTodoPress(item)}
              activeOpacity={0.6}
              style={styles.istiqamah}>
              <AntDesign
                name="checkcircleo"
                size={hp('3%')}
                color={status ? theme.brand.primary : theme.ui.gray2}
              />
            </TouchableOpacity>
          )}
        </TouchableOpacity>
      </Swipeable>
    );
  }
}

const styles = StyleSheet.create({
  ilmaBytesTxt: {
    fontSize: 16,
    color: 'rgb(39,39,39)',
  },
  namazContainer: {
    marginHorizontal: wp('5%'),
    height: hp('40%'),
    width: wp('90%'),
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  prayersTxt: {
    fontFamily: 'Roboto-Regular',
    fontSize: hp('2.5%'),
    color: COLORS.sky_blue,
    alignSelf: 'center',
    textAlign: 'left',
  },
  namazTxt: {
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    color: COLORS.basic_black,
  },
  undernamazContainer: {
    justifyContent: 'space-between',

    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('1%'),
    backgroundColor: '#fff',
    padding: hp('1%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  iconChecked: {
    height: 40,
    width: 40,
    marginLeft: hp('17%'),
    marginTop: hp('0.5'),
  },
  lineTxt: {
    width: wp('80%'),
    height: hp('0.1%'),
    backgroundColor: COLORS.grey,
    marginHorizontal: wp('5%'),
  },
  viewDetailsTxt: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: 'rgb(74,168,197)',
  },
  deleteBtn: {
    color: 'red',
  },
  editBtn: {
    color: 'green',
  },
  ImageContainer: {
    width: wp('14%'),
    height: hp('7%'),
    backgroundColor: '#fff',
    marginRight: wp('2%'),
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 0.8,
    borderColor: COLORS.sky_blue,
  },
  image: {height: '100%', width: '100%'},
  istiqamah: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 50,
    backgroundColor: '#fff',
  },
  flexrow: {flexDirection: 'row'},
});
