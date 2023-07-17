import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import HeaderComponent from "../components/HeaderComponent";

const WishlistScreen = () => {
  return (
    <>
      <HeaderComponent screenName={"Wishlist"} />
      <TouchableOpacity className="flex-row bg-white border p-4 border-gray-200">
        <View className="flex-row">
          <Image
            style={{
              borderWidth: 1,
              borderColor: "#F3F3F4",
            }}
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-20 w-20 bg-gray-300 p-4 mr-4"
          />
        </View>
        <View className="flex-row flex-1">
          <View classNmae="flex-row flex-1 pr-2">
            <Text className="text-lg mb-1">Text</Text>
            <Text className="text-gray-400">Text</Text>
            <Text className="text-gray-400 mt-2">Text</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default WishlistScreen;
