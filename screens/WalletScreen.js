import { View, Text } from "react-native";
import React from "react";
import HeaderComponent from "../components/HeaderComponent";

const WalletScreen = () => {
  return (
    <View>
      <HeaderComponent screenName={"Wallet"} />
      <Text>WalletScreen</Text>
    </View>
  );
};

export default WalletScreen;
