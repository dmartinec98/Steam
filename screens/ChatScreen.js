import { View, Text, ScrollView, TextInput } from "react-native";
import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import ChatListItem from "../components/ChatListItem";
import { useState } from "react";
import { PaperAirplaneIcon } from "react-native-heroicons/outline";

const ChatScreen = () => {
  const [chatItem, setChatItem] = useState([
    {
      id: "123",
      imgUrl: "https://links.papareact.com/gn7",
      title: "Korisnik 2",
      desc: "Primjer poruke",
    },
    {
      id: "232",
      imgUrl: "https://links.papareact.com/wru",
      title: "Korisnik 1",
      desc: "Primjer poruke 2",
    },
    {
      id: "1242343",
      imgUrl: "https://links.papareact.com/wru",
      title: "Korisnik 1",
      desc: "Primjer poruke 3",
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
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2  bg-gray-200 p-3 items-center h-10 rounded-md">
          <TextInput className="flex-1" placeholder="Message" />
        </View>
        <PaperAirplaneIcon color="#000000" size={20} />
      </View>
    </>
  );
};

export default ChatScreen;
