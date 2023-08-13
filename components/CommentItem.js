import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CommentItem = ({ imgUrl, content, username }) => {
  return (
    <TouchableOpacity className="flex-row pt-2 pb-2 rounded-md  mt-2">
      <Image
        source={{ uri: imgUrl }}
        className="rounded-md h-10 w-10 bg-gray-300 p-4 "
      />
      <View>
        <Text className="font-bold ml-3">{username}</Text>
        <Text className="ml-3">{content}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CommentItem;
