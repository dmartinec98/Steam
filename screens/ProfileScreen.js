import { View, Text, Image } from "react-native";
import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import SettingsHeaderComponent from "../components/SettingsHeaderComponent";

const ProfileScreen = () => {
  return (
    <View>
      <SettingsHeaderComponent screenName={"Profile"} />
      <View className="flex-row">
        <Image
          style={{
            borderWidth: 1,
            borderColor: "#F3F3F4",
          }}
          source={{ uri: "https://links.papareact.com/gn7" }}
          className="h-20 w-20 bg-gray-300 p-4 mr-4 ml-10 rounded-md "
        />
        <Text className="mt-5">Nickname</Text>
      </View>
      <View className="flex-row ml-10 mt-2 ">
        <Text className="mr-3 rounded-full  h-10 w-10 text-center pt-2 border-black border-2">
          100
        </Text>
        <Text className="p-2">Steam Level</Text>
      </View>
      <Text className="mt-2 ml-3 mr-3">
        Tu ide neki description
        dududududuudududuudududududududududududuudududududududududuududududududududududududu
      </Text>
    </View>
  );
};

export default ProfileScreen;
