import { View, Text } from "react-native";
import React from "react";
import SettingsHeaderComponent from "../components/SettingsHeaderComponent";

const EditProfileScreen = () => {
  return (
    <View>
      <SettingsHeaderComponent screenName={"Edit Profile"} />
      <Text>EditProfileScreen</Text>
    </View>
  );
};

export default EditProfileScreen;
