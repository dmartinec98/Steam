import { View, Text } from "react-native";
import React from "react";
import HeaderComponent from '../components/HeaderComponent'
import SettingsHeaderComponent from "../components/SettingsHeaderComponent";

const OwnedItemsScreen = () => {
  return (
    <View>
      <SettingsHeaderComponent screenName={"Inventory"} />
      <Text>OwnedItemsScreen</Text>
    </View>
  );
};

export default OwnedItemsScreen;
