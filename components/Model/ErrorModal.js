import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../shared/themes';
const ErrorModal = ({show, setShow, error}) => {
  return (
    <TouchableWithoutFeedback onPress={setShow}>
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={show}
          onRequestClose={setShow}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <MaterialIcons
                name="error-outline"
                size={40}
                color={COLORS.sky_blue}
              />
              <Text style={styles.error}>{error}</Text>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={setShow}
                style={styles.btn}>
                <Text style={styles.btnTxt}>Ok</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ErrorModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingTop: 10,
    paddingBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  error: {
    color: COLORS.basic_black,
    fontSize: 18,
    marginVertical: '5%',
    textAlign: 'center',
  },
  btn: {
    backgroundColor: COLORS.sky_blue,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: '5%',
  },
  btnTxt: {
    color: COLORS.white,
    fontSize: 15,
  },
});
