import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View} from 'react-native';
import styles from './Styles';
import {CustomModel} from '../../components/Model/CustomModel';
import {Text16} from '../../components/Text';
import {GradientBorderView} from '../../components/GradientBorderView/GradientBorderView';
import ImageComp from '../../components/ImageComp/ImageComp';
import ItemsList from '../../components/ItemsList/ItemsList';
import {useSelector} from 'react-redux';
import {ASK_A_SHEIKH_STATE} from '../../redux/reducers/askASheikh/getState';
import SheikhsCard from '../../components/SheikhsCard/SheikhsCard';

export const SheikhModel = props => {
  const shayookh = useSelector(ASK_A_SHEIKH_STATE.shayookh);
  const onClose = () => {
    if (!props || !props?.sheikhModelRef.current) return;

    props?.sheikhModelRef?.current?.toggleModel();
  };

  return (
    <CustomModel ref={props?.sheikhModelRef}>
      <GradientBorderView
        style={styles.topicModalHeaderStyle}
        containerStyle={styles.topicModalHeaderContainerStyle}>
        <Text16 textStyle={styles.topicModalTitle}>Select Sheikh</Text16>
        <TouchableOpacity activeOpacity={0.6} onPress={onClose}>
          <ImageComp
            source={require('../../assets/images/add.png')}
            imageStyle={styles.topicHeadercloseBtnIcon}
          />
        </TouchableOpacity>
      </GradientBorderView>
      <View style={styles.topicModal}>
        <View style={styles.modal}>
          <ItemsList
            data={shayookh}
            columnWrapperStyle={{
              justifyContent:
                shayookh.length % 2 == 0 ? 'space-between' : 'flex-start',
            }}
            numColumns={2}
            renderItem={({item}) => (
              <SheikhsCard
                data={item}
                onPress={() => props?.onPressSheikh(item)}
              />
            )}
          />
        </View>
      </View>
    </CustomModel>
  );
};

SheikhModel.propTypes = {
  sheikhModelRef: PropTypes.any.isRequired,
  onPressSheikh: PropTypes.func,
};
