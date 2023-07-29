import { View, Text } from "react-native";
import React from "react";
import HeaderComponent from '../components/HeaderComponent'

const ProfileScreen = () => {
  return (
    <View>
      <HeaderComponent screenName={"Profile"} />
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;
