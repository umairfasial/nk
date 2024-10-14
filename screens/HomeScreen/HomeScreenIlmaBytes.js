import React, {useRef} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './Styles';
import {Text13, Text16} from '../../components/Text';
import {theme} from '../../shared/theme';
import ImageComp from '../../components/ImageComp/ImageComp';
import {ILMA_STATE} from '../../redux/reducers/ilma/getState';
import IlmaCard from '../../components/IlmaCard/IlmaCard';
import {CustomModel} from '../../components/Model/CustomModel';

export const HomeScreenIlmaBytes = props => {
  const ilmaBytes = useSelector(ILMA_STATE.ilmaBytes);
  const modalRef = useRef(null);

  const toggleModel = () => {
    if (!modalRef.current) return;

    modalRef.current.toggleModel();
  };

  const RenderIlma = () => {
    return ilmaBytes.map((ilma, index) => {
      if (ilmaBytes?.length > 2 && index > 2) {
        return <></>;
      }

      return (
        <IlmaCard
          item={ilma}
          key={index?.toString()}
          onPress={() => {
            props.navigation.navigate('Ilma-Byte-Details', {
              ilma: ilma,
            });
          }}
        />
      );
    });
  };

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.modalBtn}
        onPress={toggleModel}>
        <ImageComp
          source={require('../../assets/images/modalBtn.png')}
          imageStyle={styles.img}
        />
      </TouchableOpacity>
      <View style={styles.ilmaBytesView}>
        <View style={styles.ilmaUnderView}>
          <Text16 textStyle={styles.ilmaBytes}>Ilma Bytes</Text16>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              props.navigation.navigate('Ilma-Bytes');
            }}>
            <Text13 textStyle={styles.viewAllIllma}>View All</Text13>
          </TouchableOpacity>
        </View>
        <View style={styles.IllmaBytes}>
          {ilmaBytes && ilmaBytes?.length ? <RenderIlma /> : <></>}
        </View>
      </View>
      <CustomModel
        ref={modalRef}
        animationType="fade"
        transparent={true}
        onClose={toggleModel}>
        <View style={styles.contentIlma}>
          <View style={styles.IlmaCardView}>
            <IlmaCard
              item={ilmaBytes[0]}
              onPress={() => {
                props.navigation.navigate('Ilma-Byte-Details', {
                  ilma: ilmaBytes[0],
                });
                toggleModel();
              }}
            />
          </View>
        </View>
      </CustomModel>
    </>
  );
};
