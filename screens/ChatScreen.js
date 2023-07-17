import { View, Text, ScrollView } from "react-native";
import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import ChatListItem from "../components/ChatListItem";

const ChatScreen = () => {
  return (
    <SafeAreaView>
      <HeaderComponent screenName={"Chat"} />
      <ScrollView>
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChatScreen;
