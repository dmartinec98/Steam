import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import {
  BellIcon,
  EllipsisVerticalIcon,
  ShieldCheckIcon,
  Bars3Icon,
  NewspaperIcon,
  HomeIcon,
  UserPlusIcon,
} from "react-native-heroicons/outline";
import HeaderComponent from "../components/HeaderComponent";
import { useNavigation } from "@react-navigation/native";
import supabase from "../config/supabaseService";

const SettingsScreen = ({ route }) => {
  const { userId } = route.params;
  const navigation = useNavigation();
  const [gamesOwned, setGamesOwned] = useState(0);

  useEffect(() => {
    const fetchGames = async () => {
      const { data, count } = await supabase
        .from("ownedGames")
        .select("*", { count: "exact", head: true })
        .eq("user_id", userId);

      if (count) {
        setGamesOwned(count);
      }
    };

    fetchGames();
  }, []);

  return (
    <View>
      <HeaderComponent screenName={"Settings"} />
      <View className="ml-2 mr-2">
        <View className="flex-row justify-around">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("OwnedGames", { userId: userId });
            }}
            className="rounded-md bg-gray-200 p-2 w-1/4"
          >
            <Text className="text-center">{gamesOwned}</Text>
            <Text className="text-center">Games</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Friends", {});
            }}
            className="rounded-md bg-gray-200 p-2 w-1/4"
          >
            <Text className="text-center">34</Text>
            <Text className="text-center">Friends</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Wallet", { userId: userId, isHome: false });
            }}
            className="rounded-md bg-gray-200 p-2 w-1/4"
          >
            <Text className="text-center">Add Founds</Text>
            <Text className="text-center">Wallet</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AddFriend", {});
          }}
          className="flex-row justify-center mt-2 rounded-md bg-gray-300  pt-1 pb-1 "
        >
          <UserPlusIcon color="#000000" size={20} />
          <Text className="ml-3">Add friends</Text>
        </TouchableOpacity>
        <View className="mt-3 ">
          <Text
            onPress={() => {
              navigation.navigate("Profile", {});
            }}
            className="text-center mb-1 rounded-md bg-gray-200"
          >
            View Profile
          </Text>
          <Text
            onPress={() => {
              navigation.navigate("EditProfile", {});
            }}
            className="text-center mb-1 rounded-md bg-gray-200"
          >
            Edit profile
          </Text>

          <Text
            className="text-center rounded-md bg-gray-200"
            onPress={async () => {
              await supabase.auth.signOut();
            }}
          >
            Log out
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SettingsScreen;
