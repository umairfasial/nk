import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Modal} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FavouriteVideoCard from '../../components/FavouriteVideoCard';
import ImageComp from '../../components/ImageComp/ImageComp';
import CheckBox from '@react-native-community/checkbox';
import {Text16Bold, Text18Bold} from '../../components/Text';
import styles from './Styles';
import {COLORS} from '../../shared/themes';
import ButtonComp from '../../components/Button/ButtonComp';

const FavouriteVideos = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View style={{flexDirection: 'row'}}>
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
          <Text style={styles.headingTxt}>Pardah Teachings</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}>
          <ImageComp
            source={require('../../assets/images/add.png')}
            imageStyle={styles.img}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={{marginTop: hp('2%')}}>
        <FavouriteVideoCard />
        <FavouriteVideoCard />
        <FavouriteVideoCard />
        <FavouriteVideoCard />
      </ScrollView>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{marginHorizontal: wp('5%')}}>
              <Text18Bold>Add to Favourite</Text18Bold>
              <View style={styles.checkBoxView}>
                <CheckBox
                  style={styles.boxStyle}
                  boxType={'square'}
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                />
                <Text16Bold textStyle={styles.text}>Basics</Text16Bold>
              </View>
              <View style={styles.checkView}>
                <CheckBox
                  style={styles.boxStyle}
                  boxType={'square'}
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                />
                <Text16Bold textStyle={styles.text}>
                  Pardah Teachings
                </Text16Bold>
              </View>
              <View style={styles.checkView}>
                <CheckBox
                  style={styles.boxStyle}
                  boxType={'square'}
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                />
                <Text16Bold textStyle={styles.text}>
                  Covering for women
                </Text16Bold>
              </View>
              <View style={styles.checkView}>
                <CheckBox
                  style={styles.boxStyle}
                  boxType={'square'}
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                />
                <Text16Bold textStyle={styles.text}>Beard</Text16Bold>
              </View>
              <View style={styles.checkView}>
                <CheckBox
                  style={styles.boxStyle}
                  boxType={'square'}
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                />
                <Text16Bold textStyle={styles.text}>Haya</Text16Bold>
              </View>
              <View style={styles.checkView}>
                <ImageComp
                  source={require('../../assets/images/add.png')}
                  imageStyle={styles.imgComp}
                />
                <Text16Bold textStyle={styles.text}>
                  Create New Playlist
                </Text16Bold>
              </View>
              <ButtonComp
                btnName="Save"
                styleTxt={{color: COLORS.white}}
                styleBtn={styles.button}
                onPress={() => {
                  setModalVisible(false);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default FavouriteVideos;
