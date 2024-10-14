import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View} from 'react-native';
import styles from './Styles';
import {CustomModel} from '../../components/Model/CustomModel';
import {Text16} from '../../components/Text';
import {GradientBorderView} from '../../components/GradientBorderView/GradientBorderView';
import {Categories} from '../../components/Categories/Categories';
import ImageComp from '../../components/ImageComp/ImageComp';

export const TopicsModel = props => {
  const onClose = () => {
    if (!props || !props?.modelRef.current) return;

    props?.modelRef?.current?.toggleModel();
  };

  return (
    <CustomModel ref={props?.modelRef}>
      <GradientBorderView
        style={styles.topicModalHeaderStyle}
        containerStyle={styles.topicModalHeaderContainerStyle}>
        <Text16 textStyle={styles.topicModalTitle}>Select Topic</Text16>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.topicHeadercloseBtn}
          onPress={onClose}>
          <ImageComp
            source={require('../../assets/images/add.png')}
            imageStyle={styles.topicHeadercloseBtnIcon}
          />
        </TouchableOpacity>
      </GradientBorderView>
      <View style={styles.topicModal}>
        <Categories onPressItem={item => props?.onPressItem(item)} />
      </View>
    </CustomModel>
  );
};

TopicsModel.propTypes = {
  modelRef: PropTypes.any.isRequired,
  onPressItem: PropTypes.func,
};
