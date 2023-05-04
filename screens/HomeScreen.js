import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { UserIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-xl">Username</Text>
        </View>

        <UserIcon size={35} color="#000000" />
      </View>
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2  bg-gray-200 p-3 items-center">
          <TextInput className="flex-1" placeholder="Search" />
          <MagnifyingGlassIcon color="#000000" size={20} />
        </View>
      </View>

      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <Text>Categories</Text>
        <Categories />

        <FeaturedRow
          id="123123"
          title="Recommended"
          description="Primjer necega kaj bu priakzano"
        />
        <View className="flex-row justify-around py-5 ">
          <Text className="border-solid border-2 border-black rounded-full py-1 px-2">
            NEW
          </Text>
          <Text className="border-solid border-2 border-black rounded-full py-1 px-2">
            TRENDING
          </Text>
          <Text className="border-solid border-2 border-black rounded-full py-1 px-2">
            TOP
          </Text>
          <Text className="border-solid border-2 border-black rounded-full py-1 px-2">
            UPCOMING
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
