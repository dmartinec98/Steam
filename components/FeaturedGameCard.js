import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const FeaturedGameCard = ({
  id,
  imgUrl,
  title,
  rating,
  ganre,
  price,
  desc,
  userId,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="bg-white mr-3 shadow-sm"
      onPress={() => {
        navigation.navigate("Game", {
          id: id,
          imgUrl: imgUrl,
          title: title,
          price: price,
          rating: rating,
          ganre: ganre,
          desc: desc,
          userId: userId,
        });
      }}
    >
      <Image source={{ uri: imgUrl }} className="h-36 w-64 rounded-sm" />
      <View className="ml-3 mb-3">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="gray" opacity={0.5} size={22}></StarIcon>
          <Text className="text-xs text-gray-500">{rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FeaturedGameCard;
