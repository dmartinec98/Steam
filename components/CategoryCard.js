import { Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CategoryCard = ({ imgUrl, title }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="mr-2"
      onPress={() => {
        navigation.navigate("Wishlist", {});
      }}
    >
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-20 w-20 rounded"
      />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
