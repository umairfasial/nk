import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {Modal} from 'react-native';

export const CustomModel = forwardRef((props, ref) => {
  const [visible, setModalState] = useState(false);
  const {animationType = 'fade'} = props || {};

  useImperativeHandle(ref, () => ({
    toggleModel: () => {
      setModalState(!visible);
    },
  }));

  if (!visible) return <></>;

  return (
    <Modal
      visible={visible}
      animationType={animationType}
      {...props}
      onRequestClose={() => {
        setModalState(false);
        props?.onClose();
      }}>
      {props?.children}
    </Modal>
  );
});
