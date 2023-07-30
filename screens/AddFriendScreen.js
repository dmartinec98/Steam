import { View, Text, TextInput } from "react-native";
import React from "react";
import SettingsHeaderComponent from "../components/SettingsHeaderComponent";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

const AddFriendScreen = () => {
  return (
    <View>
      <SettingsHeaderComponent screenName={"Add Friends"} />
      <View className="bg-gray-300 p-2">
        <Text className="ml-3">ADD A FRIEND</Text>
      </View>
      <View className="bg-gray-200 p-2">
        <Text className="ml-3 ">Your Friend Code</Text>
        <View className="flex-row justify-end bg-gray-300 rounded-md">
          <Text className="flex-1 p-2">123213</Text>
          <Text className="ml-3 bg-gray-400 p-2 rounded-md mr-2">Copy</Text>
        </View>
        <Text className="mt-2 ml-3 mb-2">
          Entor your firend's Friend Code to invite them to connect.
        </Text>
        <View className="flex-row flex-1 space-x-2  bg-gray-300 p-3 items-center h-10 rounded-md">
          <TextInput className="flex-1" placeholder="Search" keyboardType="numeric" />
          <MagnifyingGlassIcon color="#000000" size={20} />
        </View>
      </View>
    </View>
  );
};

export default AddFriendScreen;
