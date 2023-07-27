import { View, Text, ScrollView } from "react-native";
import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import ChatListItem from "../components/ChatListItem";
import { useState } from "react";

const ChatScreen = () => {
  const [chatItem, setChatItem] = useState([
    {
      id: "123",
      imgUrl: "https://links.papareact.com/gn7",
      title: "Sushi simultaor",
      desc: "OVo je neka poruka balblalbalb",
    },
  ]);

  return (
    <>
      <HeaderComponent screenName={"Chat"} />
      <ScrollView>
        {chatItem.map((item) => (
          <View key={item.id}>
            <ChatListItem
              imgUrl={item.imgUrl}
              title={item.title}
              desc={item.desc}
            />
          </View>
        ))}
      </ScrollView>
    </>
  );
};

export default ChatScreen;
