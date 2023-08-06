import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import CommentItem from "./CommentItem";

const Comments = () => {
  return (
    <View className="m-1 mt-2 ">
      <View>
        <Text className="text-lg p-2 rounded-md ">Comments</Text>
      </View>
      <View className="mt-2 mr-2 flex-row">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-10 w-10 bg-gray-300 p-4 rounded-md "
        />
        <View className="flex-1 ml-2 space-x-2  bg-gray-200 p-3 items-center h-10 rounded-md">
          <TextInput placeholder="Add a comment" />
        </View>
      </View>
      <CommentItem></CommentItem>
    </View>
  );
};

export default Comments;
