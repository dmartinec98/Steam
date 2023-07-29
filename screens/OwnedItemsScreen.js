import { View, Text } from "react-native";
import React from "react";
import HeaderComponent from '../components/HeaderComponent'

const OwnedItemsScreen = () => {
  return (
    <View>
      <HeaderComponent screenName={"Owned Items"} />
      <Text>OwnedItemsScreen</Text>
    </View>
  );
};

export default OwnedItemsScreen;
