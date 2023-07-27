import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const ChatListItem = ({ imgUrl, title, desc }) => {
  return (
    <TouchableOpacity className="flex-row bg-white pt-2 pb-2 rounded-md m-1">
      <Image
        source={{ uri: imgUrl }}
        className="rounded-md h-10 w-10 bg-gray-300 p-4 ml-2 mr-2"
      />
      <View>
        <Text className="font-bold">{title}</Text>
        <Text>{desc}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatListItem;
