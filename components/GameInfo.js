import { View, Text, Image } from "react-native";
import React from "react";
import HeaderComponent from "./HeaderComponent";
import { useRoute } from "@react-navigation/native";

const GameInfo = () => {
  const {
    params: { id, title, imgUrl, desc },
  } = useRoute();

  return (
    <View>
      <HeaderComponent></HeaderComponent>
      <View className="flex-row ">
        <Image
          style={{
            borderWidth: 1,
            borderColor: "#F3F3F4",
          }}
          source={{ uri: imgUrl }}
          className="object-cover h-40 w-full rounded-md   bg-gray-300 p-4 mr-4"
        />
      </View>
      <View>
        <Text className="text-lg text-center mt-2">{title}</Text>
        <Text className="text-sm text-center">{desc}</Text>
      </View>
      <View className="flex-row justify-end pt-5">
        <Text className="flex-1 p-2 ml-10">Rating: 32%</Text>
        <Text className="p-2 ">$20</Text>
        <Text className="p-2 bg-gray-300 rounded-md mr-10">Buy</Text>
      </View>
      <View>
        <Text>Comments</Text>
        {/*Tu treba napravit komponentu za komentare */}
      </View>
    </View>
  );
};

export default GameInfo;
