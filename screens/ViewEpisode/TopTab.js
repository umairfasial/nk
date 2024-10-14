import {StyleSheet} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import OverView from './OverView';
import Questions from './Questions';
import {COLORS} from '../../shared/themes';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const TopTab = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      indicatorStyle={{
        color: 'rgb(74,168,197)',
        backgroundColor: 'rgb(74,168,197)',
      }}
      screenOptions={{
        tabBarPressColor: 'transparent',
        tabBarActiveTintColor: COLORS.sky_blue,
        tabBarInactiveTintColor: 'rgb(209,209,209)',
        tabBarStyle: {
          marginHorizontal: wp('5%'),
          elevation: 0,
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'rgb(74,168,197)',
          width: wp('30%'),
          marginLeft: wp('7.5%'),
        },
        tabBarOptions: {
          showIcon: true,
        },
      }}>
      <Tab.Screen name="OverView" component={OverView} />
      <Tab.Screen name="Questions" component={Questions} />
    </Tab.Navigator>
  );
};

export default TopTab;

const styles = StyleSheet.create({});
