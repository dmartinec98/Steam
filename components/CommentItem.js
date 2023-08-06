import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CommentItem = ({imgUrl,desc,title}) => {
  return (
    <TouchableOpacity className="flex-row pt-2 pb-2 rounded-md  mt-2">
      <Image
        source={{ uri: imgUrl }}
        className="rounded-md h-10 w-10 bg-gray-300 p-4 "
      />
      <View>
        <Text className="font-bold ml-3">Username</Text>
        <Text className="ml-3">Njubaro njubaro Njubaro njubaro Njubaro njubar</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CommentItem;
