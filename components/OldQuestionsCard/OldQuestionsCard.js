import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {Text16} from '../Text';
import styles from './Styles';

const OldQuestionsCard = React.memo(props => {
  const {question = {}, user = {}, onPress = () => {}} = props || {};

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.6}>
      <View style={styles.textView}>
        <View style={{flexGrow: 1}}>
          <Text16 style={styles.question}>{question?.question}</Text16>
        </View>
      </View>
    </TouchableOpacity>
  );
});

OldQuestionsCard.propTypes = {
  question: PropTypes.object,
  user: PropTypes.object,
  onPress: PropTypes.func,
};

export default OldQuestionsCard;
