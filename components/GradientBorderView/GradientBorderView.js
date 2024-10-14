import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import {theme} from '../../shared/theme';
import {GRADIENT_COLOR} from '../../shared/themes';

export const GradientBorderView = React.memo(props => {
  return (
    <LinearGradient
      colors={GRADIENT_COLOR}
      style={[style.wrapper, props.style]}>
      <View style={[style.container, props.containerStyle]}>
        {props.children}
      </View>
    </LinearGradient>
  );
});

GradientBorderView.propTypes = {
  style: PropTypes.object,
  containerStyle: PropTypes.object,
};

const style = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 2,
    paddingBottom: 2,
    overflow: 'hidden',
    marginTop: '2%',
  },
  container: {
    backgroundColor: theme.ui.white,
    flexGrow: 1,
  },
});
