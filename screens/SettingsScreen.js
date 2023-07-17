import { View, Text } from "react-native";
import React from "react";
import {
  BellIcon,
  EllipsisVerticalIcon,
  ShieldCheckIcon,
  Bars3Icon,
  NewspaperIcon,
  HomeIcon,
} from "react-native-heroicons/outline";
import HeaderComponent from "../components/HeaderComponent";

const SettingsScreen = () => {
  return (
    <View>
      <HeaderComponent screenName={"Settings"} />
      <View className="flex-row">
        <HomeIcon color="#000000" size={20} />
        <Text className="pl-3">SettingsScreen</Text>
      </View>
      <View className="flex-row">
        <HomeIcon color="#000000" size={20} />
        <Text className="pl-3">SettingsScreen</Text>
      </View>
      <View className="flex-row">
        <HomeIcon color="#000000" size={20} />
        <Text className="pl-3">SettingsScreen</Text>
      </View>
    </View>
  );
};

export default SettingsScreen;
