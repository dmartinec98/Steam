import { View, Text, ScrollView } from "react-native";
import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import ChatListItem from "../components/ChatListItem";
import { useState } from "react";

const NotificationScreen = () => {
  const [notification, setNotification] = useState([
    {
      id: "123",
      imgUrl: "https://links.papareact.com/gn7",
      title: "Sushi simultaor",
      desc: "Game on sale",
    },
    {
      id: "232",
      imgUrl: "https://links.papareact.com/gn7",
      title: "Sushi simultaor",
      desc: "Sushu added you",
    },
    {
      id: "1242343",
      imgUrl: "https://links.papareact.com/gn7",
      title: "Sushi simultaor",
      desc: "Sushi2 added you",
    },
  ]);

  return (
    <View>
      <HeaderComponent screenName={"Notifications"} />
      <ScrollView>
        {notification.map((item) => (
          <View key={item.id}>
            <ChatListItem
              imgUrl={item.imgUrl}
              title={item.title}
              desc={item.desc}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default NotificationScreen;
