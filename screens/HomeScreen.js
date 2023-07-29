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
      title: "Sushi simultaor1",
      desc: "Super duper game",
      rating: "5",
      ganre: "action",
      price: "32",
    },
    {
      id: "1",
      imgUrl: "https://links.papareact.com/gn7",
      title: "Sushi simultaor2",
      desc: "Super game",
      rating: "5",
      ganre: "action",
      price: "32",
    },
    {
      id: "12",
      imgUrl: "https://links.papareact.com/gn7",
      title: "Sushi simultaor3",
      desc: "Gr8 Game M8",
      rating: "5",
      ganre: "action",
      price: "32",
    },
    {
      id: "13",
      imgUrl: "https://links.papareact.com/gn7",
      title: "Sushi simultaor",
      desc: "AAAA",
      rating: "5",
      ganre: "action",
      price: "32",
    },
    {
      id: "15",
      imgUrl: "https://links.papareact.com/gn7",
      title: "Sushi simultaor",
      desc: "Super duper game",
      rating: "5",
      ganre: "action",
      price: "32",
    },
  ]);

  return (
    <>
      <HeaderComponent />
      <View className="pb-3">
        <ScrollView className="bg-gray-100">
          <FeaturedRow
            id="123123"
            title="Recommended"
            description="Primjer necega kaj bu priakzano"
          />
        </ScrollView>
      </View>
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
            id={item.id}
            imgUrl={item.imgUrl}
            title={item.title}
            desc={item.desc}
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
