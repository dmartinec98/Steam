import { View, Text, ScrollView } from "react-native";
import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import ChatListItem from "../components/ChatListItem";
import { useState, useEffect } from "react";

import supabase from "../config/supabaseService";

const NotificationScreen = ({ route }) => {
  const { userId } = route.params;
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
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchNot = async () => {
      const { data, error } = await supabase
        .from("notifications")
        .select()
        .eq("userId", userId);

      if (error) {
        setFetchError("Could not fetch the notifications!");
        setNotification(null);
      }

      if (data) {
        setNotification(data);
        setFetchError(null);
      }
    };

    fetchNot();
  }, []);

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
