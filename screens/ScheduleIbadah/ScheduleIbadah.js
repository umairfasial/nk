import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Switch,
  SafeAreaView,
  Platform,
  FlatList,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FormInput from '../../components/FormInput/FormInput';
import styles from './Styles';
import {COLORS} from '../../shared/themes';
import ButtonComp from '../../components/Button/ButtonComp';
import {Text16} from '../../components/Text';
import DatePicker from 'react-native-date-picker';
import {
  createNewIstiqamah,
  updateToDo,
} from '../../redux/reducers/Istiqamah/istiqamah.actions';
import {useDispatch} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import {getLocalStorage} from '../../shared/functions';
import {STORAGE_KEYS} from '../../shared/constants';
import Header from '../../components/Header/Header';
import {CheckBox} from 'react-native-elements';

const ScheduleIbadah = ({navigation}) => {
  const {params} = useRoute();
  const mode = params?.mode;
  const item = params?.item;
  const dispatch = useDispatch();
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [selectedDays, setSelectedDays] = useState([]);
  const [endDate, setEndDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [title, setTitle] = useState('');
  const [weekdays, setWeekdays] = useState([
    {name: 'Monday', checked: false},
    {name: 'Tuesday', checked: false},
    {name: 'Wednesday', checked: false},
    {name: 'Thursday', checked: false},
    {name: 'Friday', checked: false},
    {name: 'Saturday', checked: false},
    {name: 'Sunday', checked: false},
  ]);
  useEffect(() => {
    if (item) {
      setTitle(item.title);
    }
    navigation.addListener('focus', () => {
      getToken();
    });
    getToken();
  }, []);
  const handleCheckboxToggle = index => {
    const updatedWeekdays = [...weekdays];
    updatedWeekdays[index].checked = !updatedWeekdays[index].checked;
    setWeekdays(updatedWeekdays);
    const selected = updatedWeekdays.filter(day => day.checked);
    const selectedDayNames = selected.map(day => day.name);
    setSelectedDays(selectedDayNames);
  };

  const createToDo = () => {
    if (selectedDays?.length) {
      let data = {
        title,
        recurrence_days: selectedDays,
        start_time: startDate,
        end_time: endDate,
      };
      dispatch(createNewIstiqamah(data));
    }
  };
  const update = () => {
    let data = {
      title,
      recurrence_days: selectedDays,
      start_time: startDate,
      end_time: endDate,
    };
    dispatch(updateToDo(data, item.id));
    navigation.goBack();
  };
  const getToken = async () => {
    const token = await getLocalStorage(STORAGE_KEYS.TOKEN);
  };
  const handleStartDateChange = time => {
    setStartDate(time);
  };

  const handleEndDateChange = time => {
    if (time >= startDate) {
      setEndDate(time);
    }
  };

  const renderItem = ({item, index}) => (
    <CheckBox
      key={index}
      checkedColor={COLORS.sky_blue}
      title={item.name}
      checked={item.checked}
      textStyle={{color: COLORS.sky_blue}}
      onPress={() => handleCheckboxToggle(index)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Add ibadah for istiqamah" />

      <View style={styles.contentContainer}>
        <FormInput
          placeholder={'Name'}
          inputStyle={styles.input}
          onChangeText={txt => setTitle(txt)}
          value={title}
        />

        <View style={{padding: 10}}>
          <FlatList
            data={weekdays}
            keyExtractor={index => index.toString()}
            numColumns={2}
            renderItem={renderItem}
          />
        </View>
        <Text16 textStyle={styles.timeTxt}>Time</Text16>
        <View style={styles.dropdownView}>
          <DatePicker
            mode="time"
            locale="en"
            open={true}
            textColor={COLORS.black}
            date={startDate}
            style={styles.dropdown}
            onConfirm={handleStartDateChange}
            onDateChange={handleStartDateChange}
          />
          <View style={styles.endtime} />
          <DatePicker
            mode="time"
            locale="en"
            open={true}
            textColor={COLORS.black}
            date={endDate}
            style={styles.dropdown}
            onConfirm={handleEndDateChange}
            onDateChange={handleEndDateChange}
            minimumDate={startDate}
          />
        </View>

        <View style={styles.notificationStyle}>
          <Text style={styles.notificationTxt}>Send Notifications</Text>
          <Switch
            style={
              Platform.OS == 'ios'
                ? {transform: [{scaleX: 0.7}, {scaleY: 0.7}]}
                : {transform: [{scaleX: 0.9}, {scaleY: 0.9}]}
            }
            trackColor={{false: '#777', true: COLORS.sky_blue}}
            thumbColor={isEnabled ? COLORS.white : '#f4f3f4'}
            ios_backgroundColor="#777"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={{marginTop: hp('5%')}}>
          <ButtonComp
            onPress={() => (mode ? update() : createToDo())}
            btnName={mode ? 'Update' : 'Save'}
            styleBtn={styles.button}
            styleTxt={{color: COLORS.white}}
          />
          <ButtonComp
            onPress={() => navigation.goBack()}
            btnName="Cancel"
            styleBtn={[styles.button, {backgroundColor: COLORS.white}]}
            styleTxt={{color: COLORS.basic_black}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ScheduleIbadah;
