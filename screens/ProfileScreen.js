import { View, Text } from "react-native";
import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import SettingsHeaderComponent from "../components/SettingsHeaderComponent";

const ProfileScreen = () => {
  return (
    <View>
      <SettingsHeaderComponent screenName={"Profile"} />
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;
