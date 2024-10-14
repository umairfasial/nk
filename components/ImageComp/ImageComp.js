import React from 'react';
import {Image} from 'react-native';

const ImageComp = props => {
  return (
    <Image
      resizeMode={props?.resizeMode}
      source={props?.source}
      style={props?.imageStyle}
    />
  );
};

export default ImageComp;
