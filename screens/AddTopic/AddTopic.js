import React from 'react';
import {View, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './Styles';
import {COLORS} from '../../shared/themes';
import ButtonComp from '../../components/Button/ButtonComp';
import {Text20} from '../../components/Text';
import ImageComp from '../../components/ImageComp/ImageComp';

const AddTopic = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.goBack()}>
          <FontAwesome
            name={'chevron-left'}
            size={20}
            color={COLORS.black}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text20 textStyle={styles.addTopicTxt}>Add a Topic</Text20>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.topicStyle}>
          <ImageComp
            source={require('../../assets/images/topic.png')}
            imageStyle={styles.image}
          />
          <TextInput placeholder="Topic" style={styles.topicTxt} />
        </View>
        <View style={styles.buttonView}>
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

export default AddTopic;
