import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/AntDesign';

import { theme } from '../../shared/theme';
import { CustomModel } from '../Model/CustomModel';
import { Text12, Text15 } from '../Text';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const CommentInput = forwardRef((props, ref) => {
  const [showCommentInput, setCommentInputState] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const modelRef = useRef(null);

  useImperativeHandle(ref, () => ({
    _toggleModal: () => {
      return toggleModal();
    },
  }));

  const toggleModal = () => {
    if (!modelRef.current) return;

    setCommentInputState(false);
    modelRef.current.toggleModel();
  };

  return (
    <>
      {!showCommentInput ? (
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={toggleModal}
          style={[styles.fakeInputWrapper, props.buttonStyle]}>
          <Text12 textStyle={{ paddingVertical: 5 }}>
            {props?.title || 'Add Comment'}
          </Text12>
        </TouchableOpacity>
      ) : (
        <></>
      )}
      <CustomModel
        ref={modelRef}
        onClose={() => {
          setCommentInputState(false);
          props.onClose();
        }}
        transparent
        animationType="fade">
        <View style={styles.wrapper}>
          <KeyboardAvoidingView behavior="height">
            <View style={{ backgroundColor: theme.ui.white }}>
              <View
                style={[
                  styles.inputHeader,
                  !props.replyTo && { justifyContent: 'flex-end' },
                ]}>
                {props.replyTo ? (
                  <Text12
                    textStyle={{
                      marginHorizontal: 5,
                      color: theme.brand.primary,
                    }}>
                    Reply To:
                    {props.replyTo?.user?.fname +
                      ' ' +
                      props.replyTo?.user?.lname}
                  </Text12>
                ) : (
                  <></>
                )}
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={{
                    padding: 5,
                    marginHorizontal: 5,
                  }}
                  onPress={() => {
                    toggleModal();
                    props?.onClose();
                  }}>
                  <Icon name="close" />
                </TouchableOpacity>
              </View>
              <TextInput
                placeholder={props?.title || 'Add Comment'}
                multiline
                style={styles.inputStyle}
                autoFocus
                onChangeText={text => setInputValue(text)}
              />
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.postBtn}
                onPress={() => {
                  props.onSubmit(inputValue);
                  setInputValue('');
                  toggleModal();
                }}>
                <Text15 textStyle={styles.postBtnText}>Submit</Text15>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </CustomModel>
    </>
  );
});

CommentInput.propTypes = {
  buttonStyle: PropTypes.object,
  title: PropTypes.string,
  replyTo: PropTypes.object,
  onSubmit: PropTypes.func,
  onClose: PropTypes.func,
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'flex-end',
  },
  inputStyle: {
    maxHeight: hp('30%'),
  },
  inputHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fakeInputWrapper: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 40,
    paddingHorizontal: 10,
    paddingVertical: 7,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 5,
    backgroundColor: theme.ui.gray3,
    borderWidth: 1,
    borderColor: theme.ui.gray2,
  },
  postBtn: {
    alignItems: 'flex-end',
    padding: 10,
  },
  postBtnText: {
    color: theme.brand.primary,
  },
});
