import { View, Text } from "react-native";
import React from "react";
import HeaderComponent from "../components/HeaderComponent";

const AppSettingsScreen = () => {
  return (
    <View>
      <HeaderComponent screenName={"Application Settings"} />
      <Text>AppSettingsScreen</Text>
    </View>
  );
};

export default AppSettingsScreen;
