import { View, Text, Image } from "react-native";
import React from "react";

const NewsListItem = ({ id, imgUrl, title, desc,content }) => {
  return (
    <View className="p-2 border-2 border-gray-200 m-1  rounded-md">
      <View className="flex-row ">
        <Image
          style={{
            borderWidth: 1,
            borderColor: "#F3F3F4",
          }}
          source={{ uri: imgUrl }}
          className="object-cover h-40 w-full rounded-md   bg-gray-300 p-4 mr-4"
        />
      </View>
      <Text className="font-semibold text-lg">{title}</Text>
      <Text className="text-sm">{desc}</Text>
    </View>
  );
};

export default NewsListItem;
