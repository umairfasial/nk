import React from 'react';
import {View, TouchableOpacity, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../shared/themes';
import styles from './Styles';
import {Text17} from '../../components/Text';
import {useRoute} from '@react-navigation/native';
import HTML from 'react-native-render-html';

const IlmaBytesDetails = ({navigation}) => {
  const route = useRoute();
  const details = route?.params?.ilmaDetails;
  return (
    <View style={styles.container}>
      <View style={styles.underConatiner}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.goBack()}
          style={styles.titleCard}>
          <FontAwesome name={'chevron-left'} size={20} color={COLORS.white} />

          <Text17 textStyle={styles.title}>{details?.title}</Text17>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{margin: '3%'}}>
          <HTML source={{html: details?.description}} />
        </View>
      </ScrollView>
    </View>
  );
};

export default IlmaBytesDetails;
