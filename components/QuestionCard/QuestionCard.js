import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text15} from '../../components/Text';
import {COLORS} from '../../shared/themes';
import styles from './Styles';
import HTML from 'react-native-render-html';
import AntDesign from 'react-native-vector-icons/AntDesign';
const QuestionCard = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container}
      onPress={props?.onPress}>
      <View style={styles.headingView}>
        <Text15 textStyle={{padding: 2, color: COLORS.white}}>
          {props?.title}
        </Text15>
      </View>

      <View style={styles.pdfView}>
        {props?.type === 'pdf' && (
          <View style={styles.pdf}>
            <AntDesign name="pdffile1" size={70} color={COLORS.sky_blue} />
          </View>
        )}
        {props?.desc ? (
          <HTML source={{html: props?.desc.slice(0, 150)}} />
        ) : (
          <Text15 textStyle={{padding: 2, color: COLORS.white}}>
            No description added
          </Text15>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default QuestionCard;
