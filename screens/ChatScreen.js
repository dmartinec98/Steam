import { View, Text } from "react-native";
import React from "react";
import HeaderComponent from "../components/HeaderComponent";

const ChatScreen = () => {
  return (
    <View>
      <HeaderComponent screenName={"Chat"} />
      <Text>ChatScreen</Text>
    </View>
  );
};

export default ChatScreen;
