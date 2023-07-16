import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import {
  MagnifyingGlassIcon,
  EllipsisVerticalIcon,
} from "react-native-heroicons/outline";

const TopNav = () => {
  return (
    <SafeAreaView className="pt-10">
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2  bg-gray-200 p-3 items-center h-10">
          <TextInput className="flex-1" placeholder="Search" />
          <MagnifyingGlassIcon color="#000000" size={20} />
        </View>
        <EllipsisVerticalIcon color="#000000" size={20} />
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-10 w-10 bg-gray-300 p-4"
        />
      </View>
      <View className="flex-row justify-center space-x-2 pb-2 mx-4 ">
        <Text className="py-1 px-2">WISHLIST</Text>
        <Text className="py-1 px-2">WALLET</Text>
      </View>
    </SafeAreaView>
  );
};

export default TopNav;
