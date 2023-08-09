import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderComponent from "./HeaderComponent";
import { useRoute } from "@react-navigation/native";
import { HeartIcon } from "react-native-heroicons/outline";
import supabase from "../config/supabaseService";

const GameInfo = () => {
  const {
    params: { id, title, imgUrl, desc, rating, price, userId },
  } = useRoute();

  const handleInsert = async (e) => {
    const { data, error } = await supabase
      .from("wishlist")
      .insert({
        name: title,
        price: price,
        imgurl: imgUrl,
        game_id: id,
        user_id: userId,
      })
      .select();

    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
    }
  };

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
        <Text className="flex-1 p-2 ml-10">Rating: {rating}</Text>
        <Text className="p-2 ">${price}</Text>
        <Text className="p-2 bg-gray-300 rounded-md mr-3">Buy</Text>
        <TouchableOpacity
          className="p-2 bg-gray-300 rounded-md mr-10"
          onPress={() => {
            handleInsert();
          }}
        >
          <HeartIcon color="#000000" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GameInfo;
