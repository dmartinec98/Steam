import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  BellIcon,
  EllipsisVerticalIcon,
  ShieldCheckIcon,
  Bars3Icon,
  NewspaperIcon,
  HomeIcon,
  UserPlusIcon,
} from "react-native-heroicons/outline";
import HeaderComponent from "../components/HeaderComponent";
import { useNavigation } from "@react-navigation/native";


const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <HeaderComponent screenName={"Settings"} />
      <View className="ml-2 mr-2">
        <View className="flex-row justify-around">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("OwnedGames", {});
            }}
            className="rounded-md bg-gray-200 p-2 w-1/4"
          >
            <Text className="text-center">12</Text>
            <Text className="text-center">Games</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Friends", {});
            }}
            className="rounded-md bg-gray-200 p-2 w-1/4"
          >
            <Text className="text-center">34</Text>
            <Text className="text-center">Friends</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Wallet", {});
            }}
            className="rounded-md bg-gray-200 p-2 w-1/4"
          >
            <Text className="text-center">Add Founds</Text>
            <Text className="text-center">Wallet</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AddFriend", {});
          }}
          className="flex-row justify-center mt-2 rounded-md bg-gray-300  pt-1 pb-1 "
        >
          <UserPlusIcon color="#000000" size={20} />
          <Text className="ml-3">Add friends</Text>
        </TouchableOpacity>
        <View className="mt-3 ">
          <Text
            onPress={() => {
              navigation.navigate("Profile", {});
            }}
            className="text-center mb-1 rounded-md bg-gray-200"
          >
            View Profile
          </Text>
          <Text
            onPress={() => {
              navigation.navigate("EditProfile", {});
            }}
            className="text-center mb-1 rounded-md bg-gray-200"
          >
            Edit profile
          </Text>
          <Text
            onPress={() => {
              navigation.navigate("OwnedItems", {});
            }}
            className="text-center mb-1 rounded-md bg-gray-200"
          >
            Inventory
          </Text>
          <Text className="text-center rounded-md bg-gray-200">Log out</Text>
        </View>
      </View>
    </View>
  );
};

export default SettingsScreen;
