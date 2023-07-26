import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";

import HeaderComponent from "../components/HomeHeaderComponent";

import FeaturedRow from "../components/FeaturedRow";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GameCard from "../components/GameCard";

const HomeScreen = () => {
  const Tab = createBottomTabNavigator();
  const [games, setGames] = useState([
    {
      id: "123",
      imgUrl: "https://links.papareact.com/gn7",
      title: "Sushi simultaor",
      rating: "5",
      ganre: "action",
      price: "32",
    },
    {
      id: "1",
      imgUrl: "https://links.papareact.com/gn7",
      title: "Sushi simultaor",
      rating: "5",
      ganre: "action",
      price: "32",
    },
    {
      id: "12",
      imgUrl: "https://links.papareact.com/gn7",
      title: "Sushi simultaor",
      rating: "5",
      ganre: "action",
      price: "32",
    },
    {
      id: "13",
      imgUrl: "https://links.papareact.com/gn7",
      title: "Sushi simultaor",
      rating: "5",
      ganre: "action",
      price: "32",
    },
    {
      id: "15",
      imgUrl: "https://links.papareact.com/gn7",
      title: "Sushi simultaor",
      rating: "5",
      ganre: "action",
      price: "32",
    },
  ]);

  return (
    <>
      <HeaderComponent />
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 250,
        }}
      >
        <FeaturedRow
          id="123123"
          title="Recommended"
          description="Primjer necega kaj bu priakzano"
        />
      </ScrollView>
      <View className="flex-row justify-around pb-2">
        <Text className="p-2 rounded-md bg-gray-300">Popular</Text>
        <Text className="p-2 rounded-md bg-gray-300">Top Rated</Text>
        <Text className="p-2 rounded-md bg-gray-300">Free</Text>
        <Text className="p-2 rounded-md bg-gray-300">Upcoming</Text>
      </View>
      <FlatList
        data={games}
        renderItem={({ item }) => (
          <GameCard
            imgUrl={item.imgUrl}
            title={item.title}
            ganre={item.ganre}
            price={item.price}
            rating={item.rating}
          ></GameCard>
        )}
      />
    </>
  );
};

export default HomeScreen;
