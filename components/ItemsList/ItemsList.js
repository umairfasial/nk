import React, {forwardRef} from 'react';
import {FlatList} from 'react-native';

const ItemsList = forwardRef((props, ref) => {
  if (!props.data || !props.data?.length) return <></>;

  return (
    <FlatList
      style={{marginVertical: '3%'}}
      showsVerticalScrollIndicator={false}
      data={props?.data}
      ref={ref}
      {...props}
    />
  );
});

export default React.memo(ItemsList);
