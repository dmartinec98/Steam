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
  UserIcon,
  MagnifyingGlassIcon,
  EllipsisVerticalIcon,
  ChevronDownIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className=" bg-white pt-5">
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
        <Text className="py-1 px-2">MENU</Text>
        <Text
          className="py-1 px-2"
          onPress={() => {
            navigation.navigate("Wishlist", {});
          }}
        >
          WISHLIST
        </Text>
        <Text
          className="py-1 px-2"
          onPress={() => {
            navigation.navigate("Wallet", {});
          }}
        >
          WALLET
        </Text>
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
