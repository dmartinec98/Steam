import { View, Text } from "react-native";
import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import ChatListItem from "../components/ChatListItem";

const NotificationScreen = () => {
  return (
    <View>
      <HeaderComponent screenName={"Notification"} />
      <ChatListItem></ChatListItem>
      <ChatListItem></ChatListItem>
    </View>
  );
};

export default NotificationScreen;
