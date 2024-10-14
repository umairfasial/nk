import React from 'react';
import {View, SafeAreaView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import styles from './Styles';
import TopicsScreen from '../TopicsScreen/TopicsScreen';
import ShayookhScreen from '../ShayookhScreen/ShayookhScreen';

const AskSheikh = ({navigation}) => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Tab.Navigator
          indicatorStyle={styles.indicator}
          screenOptions={styles.screens}>
          <Tab.Screen
            name="Topics"
            component={TopicsScreen}
            options={{
              tabBarIcon: ({tintColor}) => (
                <MaterialIcons name="topic" size={20} color={tintColor} />
              ),
            }}
          />
          <Tab.Screen
            name="Our Shayookh"
            component={ShayookhScreen}
            options={{
              tabBarIcon: ({tintColor}) => (
                <FontAwesome5 name="user-alt" size={20} color={tintColor} />
              ),
            }}
          />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default AskSheikh;
