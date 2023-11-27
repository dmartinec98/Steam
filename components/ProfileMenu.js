import { View, Text } from "react-native";
import React from "react";
import Comments from "./Comments";
const ProfileMenu = () => {
  return (
    <View className="mt-5">
      <View className="p-3 bg-slate-300 m-1 rounded-md">
        <Text className="text-center">Last Online 34 days ago</Text>
      </View>
      <View className="flex-row justify-around ">
        <View className="p-3 bg-slate-300 rounded-md w-48">
          <Text>Friends</Text>
        </View>
        <View className="p-3 bg-slate-300 rounded-md w-48">
          <Text>Games</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileMenu;
