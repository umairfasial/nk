import {StyleSheet} from 'react-native';
import React from 'react';
import {forwardRef} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';

const CustomBottomSheet = forwardRef((props, ref) => {
  return (
    <RBSheet
      minClosingHeight={20}
      ref={ref}
      closeOnDragDown={true}
      closeOnPressMask={false}
      customStyles={{
        wrapper: {
          backgroundColor: 'transparent',
        },
        draggableIcon: {
          backgroundColor: '#000',
        },
      }}>
      {props.content}
    </RBSheet>
  );
});

export default CustomBottomSheet;

const styles = StyleSheet.create({});
