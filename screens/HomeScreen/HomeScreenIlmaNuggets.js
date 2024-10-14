import React, {useRef} from 'react';
import VideoPlayer from 'react-native-video-player';
import {View, TouchableOpacity, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './Styles';
import {Text16, Text12, Text20} from '../../components/Text';
import {GradientBorderView} from '../../components/GradientBorderView/GradientBorderView';
import {theme} from '../../shared/theme';
import {ILMA_STATE} from '../../redux/reducers/ilma/getState';
import VideoTopics from '../../components/VideoTopics/VideoTopics';
import {CustomModel} from '../../components/Model/CustomModel';
import ItemsList from '../../components/ItemsList/ItemsList';

export const HomeScreenIlmaNuggets = () => {
  const ilmaNuggets = useSelector(ILMA_STATE.ilmaNuggets);

  const modalRef = useRef(null);

  const toggleModel = () => {
    if (!modalRef.current) return;

    modalRef.current.toggleModel();
  };

  return (
    <>
      <GradientBorderView
        style={styles.videoContent}
        containerStyle={styles.gradientBorder}>
        {ilmaNuggets && ilmaNuggets.length ? (
          <VideoPlayer
            style={styles.videoContent}
            video={{
              uri: ilmaNuggets[0].file,
            }}
          />
        ) : (
          <></>
        )}

        <View style={styles.videoText}>
          <View>
            <Text16 textStyle={{color: theme.brand.primary}}>
              Ilma Nugget
            </Text16>
            <Text20 textStyle={{color: theme.ui.white}}>Prayers</Text20>
          </View>
          <View style={{marginTop: hp('2%')}}>
            <TouchableOpacity onPress={toggleModel} activeOpacity={0.6}>
              <Text12 textStyle={{color: theme.ui.white}}>View All</Text12>
              <FontAwesome
                name={'chevron-down'}
                color={'#fff'}
                size={15}
                style={styles.arrow}
              />
            </TouchableOpacity>
          </View>
        </View>
      </GradientBorderView>

      <CustomModel
        ref={modalRef}
        animationType="fade"
        transparent={true}
        onClose={() => {}}>
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.modalView}>
            {
              <ItemsList
                data={ilmaNuggets}
                numColumns={2}
                keyExtractor={index => index?.toString()}
                renderItem={({item}) => <VideoTopics video={item.file} />}
              />
            }

            <View style={styles.videoWrapper}>
              {ilmaNuggets && ilmaNuggets.length ? (
                <VideoPlayer
                  style={styles.videoContent}
                  video={{
                    uri: ilmaNuggets[0].file,
                  }}
                />
              ) : (
                <></>
              )}
            </View>
          </View>
        </SafeAreaView>
      </CustomModel>
    </>
  );
};
