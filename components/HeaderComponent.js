import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const HeaderComponent = ({ screenName }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="pt-10">
      <View className="flex-row text-center space-x-2 pb-2 mx-4">
        <ArrowLeftIcon
          onPress={() => {
            navigation.navigate("HomeScreen", {});
          }}
          color="#000000"
          size={20}
        />
        <Text className="flex-1 text-center py-1 px-2">{screenName}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Settings", {});
          }}
        >
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-10 w-10 bg-gray-300 p-4 rounded-md"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HeaderComponent;
