import { View, Text } from "react-native";
import React from "react";
import HeaderComponent from "../components/HeaderComponent";

const NotificationScreen = () => {
  return (
    <View>
      <HeaderComponent screenName={"Notification"} />
      <Text>NotificationScreen</Text>
    </View>
  );
};

export default NotificationScreen;
