import { View, Text } from "react-native";
import React from "react";
import SettingsHeaderComponent from "../components/SettingsHeaderComponent";
import FriendsListItem from "../components/FriendsListItem";

const FriendsListScreen = () => {
  const id = 1;
  return (
    <View>
      <SettingsHeaderComponent screenName={"Friends"} />
      <FriendsListItem id={id} />
    </View>
  );
};

export default FriendsListScreen;
