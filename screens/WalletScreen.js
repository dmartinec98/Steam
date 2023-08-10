import { View, Text } from "react-native";
import React, { useEffect } from "react";
import HeaderComponent from "../components/HeaderComponent";
import { useState } from "react";
import SettingsHeaderComponent from "../components/SettingsHeaderComponent";
import { useRoute } from "@react-navigation/native";
import supabase from "../config/supabaseService";

const WalletScreen = ({ route }) => {
  const {
    params: { userId, isHome, money },
  } = useRoute();
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("balance")
        .eq("id", userId)
        .single();

      if (error) {
        console.log(error);
      }
      if (data) {
        setBalance(data.balance);
      }
    };

    fetchBalance();
  }, []);

  const handleUpdate = async (e) => {
    let helper = balance;
    helper = helper + e;
    const { error } = await supabase
      .from("profiles")
      .update({ balance: helper })
      .eq("id", userId);

    if (error) {
      console.log(error);
    }
    setBalance(helper);
  };

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
          onPress={() => {
            handleUpdate(10);
          }}
        >
          Buy
        </Text>
      </View>
      <View className="flex-row justify-around bg-gray-200 mb-1 p-1 rounded-md">
        <Text className="p-3">$20</Text>
        <Text
          className="rounded-md bg-gray-300 p-3"
          onPress={() => {
            handleUpdate(20);
          }}
        >
          Buy
        </Text>
      </View>
      <View className="flex-row justify-around bg-gray-200 mb-1 p-1 rounded-md">
        <Text className="p-3">$30</Text>
        <Text
          className="rounded-md bg-gray-300 p-3"
          onPress={() => {
            handleUpdate(30);
          }}
        >
          Buy
        </Text>
      </View>
    </View>
  );
};

export default WalletScreen;
