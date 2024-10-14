import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Modal } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ImageComp from '../../components/ImageComp/ImageComp';
import { AUTH_STATE } from '../../redux/reducers/auth/getState';
import styles from './Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../shared/themes';
import ImagePicker from 'react-native-image-crop-picker';
import { getHTTPSURL } from '../../utils/functions';
import Icon from 'react-native-vector-icons/Ionicons';
import { updateAction } from '../../redux/reducers/auth/auth.actions';

export const ProfileHeader = () => {
  const user = useSelector(AUTH_STATE.user);
  const dispatch = useDispatch();

  const [profileImage, setProfileImage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const pickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      mediaType: 'photo',
      includeBase64: true,
      cropping: true,
    })
      .then(image => {
        setProfileImage(image.path);
        setModalVisible(false);

        dispatch(updateAction({ image: image.path }));
      })
      .catch(error => {
        console.log('Error: ', error);
        setModalVisible(false);
      });
  };


  const openCamera = async () => {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      mediaType: 'photo',
      includeBase64: true,
      cropping: true,
    })
      .then(image => {
        setProfileImage(image.path);
        setModalVisible(false);
        dispatch(updateAction({ image: image.path }));
      })
      .catch(e => {
        console.log('Error: ', e);
        setModalVisible(false);
      });
  };


  return (
    <View style={styles.underContainer}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        activeOpacity={0.6}
        style={styles.innerRow}>
        <View style={styles.imageView}>
          <ImageComp
            source={
              user?.image
                ? { uri: getHTTPSURL(user.image) }
                : profileImage
                  ? { uri: getHTTPSURL(profileImage) }
                  : require('../../assets/images/default_user.png')
            }
            imageStyle={{
              height: 88,
              width: 88,
              alignSelf: 'center',
              resizeMode: 'cover',
            }}
          />
        </View>
        <View style={styles.cameraIcon}>
          <FontAwesome name="camera" size={15} color={COLORS.white} />
        </View>
      </TouchableOpacity>
      <Text style={styles.nameTxt}>{user?.fname + ' ' + user?.lname}</Text>
      <Text style={styles.mailTxt}>{user?.email}</Text>
      <Text style={styles.mailTxt}>{`${user?.contactCountry}${user?.contact}`}</Text>

      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={pickImage} style={styles.option}>
              <Icon name="md-images" size={30} color="#007AFF" />
              <Text style={styles.optionText}>Open Image from Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={openCamera} style={styles.option}>
              <Icon name="md-camera" size={30} color="#007AFF" />
              <Text style={styles.optionText}>Take Picture from Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.cancelButton}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
