import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {COLORS} from '../shared/themes';

export const Text12 = ({textStyle = {}, ...rest}) => {
  return <Text style={[style.Text12, textStyle]} {...rest} />;
};

export const Text12Bold = ({textStyle = {}, ...rest}) => {
  return <Text style={[style.Text12Bold, textStyle]} {...rest} />;
};

export const Text13 = ({textStyle = {}, ...rest}) => {
  return <Text style={[style.Text13, textStyle]} {...rest} />;
};

export const Text13Bold = ({textStyle = {}, ...rest}) => {
  return <Text style={[style.Text13Bold, textStyle]} {...rest} />;
};

export const Text14 = ({textStyle = {}, ...rest}) => {
  return <Text style={[style.Text14, textStyle]} {...rest} />;
};

export const Text14Bold = ({textStyle = {}, ...rest}) => {
  return <Text style={[style.Text14Bold, textStyle]} {...rest} />;
};

export const Text15 = ({textStyle = {}, ...rest}) => {
  return <Text style={[style.Text15, textStyle]} {...rest} />;
};

export const Text15Bold = ({textStyle = {}, ...rest}) => {
  return <Text style={[style.Text15Bold, textStyle]} {...rest} />;
};

export const Text16 = ({textStyle = {}, ...rest}) => {
  return <Text style={[style.Text16, textStyle]} {...rest} />;
};

export const Text16Bold = ({textStyle = {}, ...rest}) => {
  return <Text style={[style.Text16Bold, textStyle]} {...rest} />;
};

export const Text17 = ({textStyle = {}, ...rest}) => {
  return <Text style={[style.Text17, textStyle]} {...rest} />;
};

export const Text17Bold = ({textStyle = {}, ...rest}) => {
  return <Text style={[style.Text17Bold, textStyle]} {...rest} />;
};

export const Text18 = ({textStyle = {}, ...rest}) => {
  return <Text style={[style.Text18, textStyle]} {...rest} />;
};

export const Text18Bold = ({textStyle = {}, ...rest}) => {
  return <Text style={[style.Text18Bold, textStyle]} {...rest} />;
};

export const Text19 = ({textStyle = {}, ...rest}) => {
  return <Text style={[style.Text19, textStyle]} {...rest} />;
};

export const Text19Bold = ({textStyle = {}, ...rest}) => {
  return <Text style={[style.Text19Bold, textStyle]} {...rest} />;
};

export const Text20Bold = ({textStyle = {}, ...rest}) => {
  return <Text style={[style.Text20Bold, textStyle]} {...rest} />;
};

export const Text20 = ({textStyle = {}, ...rest}) => {
  return <Text style={[style.Text20, textStyle]} {...rest} />;
};

export const Text21 = ({textStyle = {}, ...rest}) => {
  return <Text style={[style.Text21, textStyle]} {...rest} />;
};

export const Text21Bold = ({textStyle = {}, ...rest}) => {
  return <Text style={[style.Text21Bold, textStyle]} {...rest} />;
};

export const Text22 = ({textStyle = {}, ...rest}) => {
  return <Text style={[style.Text22, textStyle]} {...rest} />;
};

export const Text22Bold = ({textStyle = {}, ...rest}) => {
  return <Text style={[style.Text22Bold, textStyle]} {...rest} />;
};

export const Text23 = ({textStyle = {}, ...rest}) => {
  return <Text style={[style.Text23, textStyle]} {...rest} />;
};

export const Text23Bold = ({textStyle = {}, ...rest}) => {
  return <Text style={[style.Text23Bold, textStyle]} {...rest} />;
};

export const Text24 = ({textStyle = {}, ...rest}) => {
  return <Text style={[style.Text24, textStyle]} {...rest} />;
};

export const Text24Bold = ({textStyle = {}, ...rest}) => {
  return <Text style={[style.Text24Bold, textStyle]} {...rest} />;
};

const style = StyleSheet.create({
  Text12: {
    fontSize: 12,
    fontFamily: 'Roboto-Medium',
  },
  Text12Bold: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  Text13: {
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
  },
  Text13Bold: {
    fontSize: 13,
    fontFamily: 'Roboto-Medium',
  },
  Text14: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
  },
  Text14Bold: {
    fontSize: 14,
    fontFamily: 'Roboto-Bold',
    color: '#0D4460',
  },
  Text15: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
  },
  Text15Bold: {
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
  },
  Text16: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  Text16Bold: {
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
  },
  Text17: {
    fontSize: 17,
  },
  Text17Bold: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  Text18: {
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    color: COLORS.black,
  },
  Text18Bold: {
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
  },
  Text19: {
    fontSize: 19,
  },
  Text19Bold: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  Text20Bold: {
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
  },
  Text20: {
    fontSize: 20,
    fontFamily: 'Roboto-Regular',
  },
  Text21: {
    fontSize: 21,
  },
  Text21Bold: {
    fontSize: 21,
    fontWeight: 'bold',
  },
  Text22: {
    fontSize: 22,
  },
  Text22Bold: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  Text23: {
    fontSize: 23,
  },
  Text23Bold: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  Text24: {
    fontSize: 24,
  },
  Text24Bold: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
