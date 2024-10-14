import { ImageBackground, StyleSheet, View, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkSession } from '../redux/reducers/auth/auth.actions';

const Splash = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(checkSession());
    }, 1500);
    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ImageBackground
        source={require('../assets/images/backgroundImage1.png')}
        resizeMode="stretch"
        style={styles.backgroundImage}
      />
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  }

});
