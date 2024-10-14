import React, {useState} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../shared/themes';
import styles from './Styles';
import FormInput from '../../components/FormInput/FormInput';
import ButtonComp from '../../components/Button/ButtonComp';
import ImageComp from '../../components/ImageComp/ImageComp';

const CreateNewFavourite = ({navigation}) => {
  const [favourite, setFavourite] = useState('');
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
        <Text style={styles.headingTxt}>Create New Favourite</Text>
      </View>

      <View style={styles.formView}>
        <FormInput
          placeholder="Favourite New"
          value={favourite}
          onChangeText={setFavourite}
        />
      </View>

      <TouchableOpacity activeOpacity={0.6} style={styles.imgComp}>
        <ImageComp
          source={require('../../assets/images/addButton.png')}
          imageStyle={styles.image}
        />
        <Text style={styles.videotext}>Add Videos</Text>
      </TouchableOpacity>

      <View style={styles.btnView}>
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
    </SafeAreaView>
  );
};

export default CreateNewFavourite;
