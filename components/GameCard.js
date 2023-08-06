import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Comments from "./Comments";

const GameCard = ({ id, imgUrl, title, ganre, price, rating, desc }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="flex-row bg-white border p-4 border-gray-200 rounded-md mb-1"
      onPress={() => {
        navigation.navigate("Game", {
          id,
          imgUrl,
          title,
          desc,
        });
      }}
    >
      <View className="flex-row">
        <Image
          style={{
            borderWidth: 1,
            borderColor: "#F3F3F4",
          }}
          source={{ uri: imgUrl }}
          className="h-20 w-20 bg-gray-300 p-4 mr-4"
        />
      </View>
      <View className="flex-1">
        <Text className="text-lg mb-1">{title}</Text>
        <Text className=" text-sm text-gray-400">{ganre}</Text>
        <View className="flex-row">
          <Text className="flex-1 text-gray-500 mt-2">${price}</Text>
          <Text className="text-gray-500 mt-2">{rating}%</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GameCard;
