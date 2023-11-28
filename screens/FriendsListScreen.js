import { View, Text } from "react-native";
import React from "react";
import SettingsHeaderComponent from "../components/SettingsHeaderComponent";
import FriendsListItem from "../components/FriendsListItem";

const FriendsListScreen = ({route}) => {
  const { userId } = route.params;
  
  return (
    <View>
      <SettingsHeaderComponent screenName={"Friends"} />
      <FriendsListItem id={userId} />
    </View>
  );
};

export default FriendsListScreen;
