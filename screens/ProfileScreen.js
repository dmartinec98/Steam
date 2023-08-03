import { View, Text } from "react-native";
import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import SettingsHeaderComponent from "../components/SettingsHeaderComponent";

const ProfileScreen = () => {
  return (
    <View>
      <SettingsHeaderComponent screenName={"Profile"} />
      <Text>ProfileScreen</Text>
      {/* Ovo kad se probudim moram, //commit radi commitanja */}
    </View>
  );
};

export default ProfileScreen;
