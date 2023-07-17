import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const ChatListItem = () => {
  return (
    <TouchableOpacity className="flex-row bg-white pt-2 pb-2 border-b-2 border-gray-500/50">
      <Image
        source={{ uri: "https://links.papareact.com/wru" }}
        className="rounded-md h-10 w-10 bg-gray-300 p-4 ml-2 mr-2"
      />
      <View>
        <Text className="font-bold">ChatListItem</Text>
        <Text>Ovo je neka poruka koju netko pise bla blaasd...</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatListItem;
