import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";

const FriendsListItem = ({ id }) => {
  const friends = [
    {
      id: "123",
      imgUrl: "https://links.papareact.com/gn7",
      name: "BUraz",
    },
    {
      id: "232",
      imgUrl: "https://links.papareact.com/gn7",
      name: "Ajmoo",
    },
    {
      id: "1242343",
      imgUrl: "https://links.papareact.com/gn7",
      name: "Maminjo",
    },
  ];

  return (
    <ScrollView>
      {friends.map((item) => (
        <View key={item.id}>
          <TouchableOpacity className="flex-row bg-white pt-2 pb-2 rounded-md m-1">
            <Image
              source={{ uri: item.imgUrl }}
              className="rounded-md h-10 w-10 bg-gray-300 p-4 ml-2 mr-2"
            />
            <View className="justify-center">
              <Text className="font-bold">{item.name}</Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default FriendsListItem;
