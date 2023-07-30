import { View, Text } from "react-native";
import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import { useState } from "react";
import SettingsHeaderComponent from "../components/SettingsHeaderComponent";
import { useRoute } from "@react-navigation/native";

const WalletScreen = () => {
  const [balance, setBalance] = useState(0);
  const {
    params: { isHome },
  } = useRoute();

  return (
    <View>
      {isHome && <HeaderComponent screenName={"Wallet"} />}
      {!isHome && <SettingsHeaderComponent screenName={"Wallet"} />}
      <View className="bg-gray-300 mb-3 rounded-md">
        <Text className="text-center">Your ballance</Text>
        <Text className="text-center">${balance}</Text>
      </View>

      <View className="flex-row justify-around bg-gray-200 mb-1 p-1 rounded-md">
        <Text className="p-3">$10</Text>
        <Text
          className="rounded-md bg-gray-300 p-3"
          onPress={() => setBalance(balance + 10)}
        >
          Buy
        </Text>
      </View>
      <View className="flex-row justify-around bg-gray-200 mb-1 p-1 rounded-md">
        <Text className="p-3">$20</Text>
        <Text
          className="rounded-md bg-gray-300 p-3"
          onPress={() => setBalance(balance + 20)}
        >
          Buy
        </Text>
      </View>
      <View className="flex-row justify-around bg-gray-200 mb-1 p-1 rounded-md">
        <Text className="p-3">$30</Text>
        <Text
          className="rounded-md bg-gray-300 p-3"
          onPress={() => setBalance(balance + 30)}
        >
          Buy
        </Text>
      </View>
    </View>
  );
};

export default WalletScreen;
