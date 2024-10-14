import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  SafeAreaView,
  Platform,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';
import FormInput from '../../components/FormInput/FormInput';
import styles from './Styles';
import {COLORS} from '../../shared/themes';
import ButtonComp from '../../components/Button/ButtonComp';
import {Text20} from '../../components/Text';

const EditIbadah = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

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
        <Text20 textStyle={styles.editTxt}>Edit</Text20>
      </View>

      <View style={styles.formView}>
        <FormInput placeholder="Name" />

        <DropDownPicker
          placeholder={'Recurrence '}
          dropDownContainerStyle={{borderWidth: 0.2}}
          style={styles.pickerStyle}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />

        <Text style={styles.timeTxt}>Time</Text>

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
        <View style={{marginTop: hp('25%')}}>
          <ButtonComp
            btnName="Save"
            styleTxt={{color: COLORS.white}}
            styleBtn={styles.button}
          />
          <ButtonComp
            btnName="Cancel"
            styleBtn={[styles.button, {backgroundColor: COLORS.white}]}
            styleTxt={{color: COLORS.basic_black}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditIbadah;
