import React from "react";
import { View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import MyPlayList from "./MyPlatist/MyPlayList";
import MyIstiqamah from "./MyIstiqamah/MyIstiqamah";

export const HomeScreenTabs = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <View style={{ marginTop: hp("2%"), flex: 1 }}>
      <Tab.Navigator
        indicatorStyle={{
          color: "rgb(74,168,197)",
          backgroundColor: "rgb(74,168,197)",
        }}
        screenOptions={{
          tabBarActiveTintColor: "rgb(74,168,197)",
          tabBarInactiveTintColor: "rgb(209,209,209)",
          tabBarStyle: {
            marginHorizontal: wp("5%"),
            elevation: 0,
            backgroundColor: "transparent",
          },
          tabBarIndicatorStyle: {
            backgroundColor: "rgb(74,168,197)",
            width: wp("30%"),
            marginLeft: wp("7.5%"),
          },
        }}
      >
        <Tab.Screen name="My Favourite" component={MyPlayList} />
        <Tab.Screen name="My Istiqamah" component={MyIstiqamah} />
      </Tab.Navigator>
    </View>
  );
};
