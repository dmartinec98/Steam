import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import GameCard from "../components/GameCard";
import { useState } from "react";

const WishlistScreen = () => {
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
      <HeaderComponent screenName={"Wishlist"} />

      <ScrollView>
        {games.map((item) => (
          <View key={item.id}>
            <GameCard
              id={item.id}
              imgUrl={item.imgUrl}
              title={item.title}
              rating={item.rating}
              ganre={item.ganre}
              price={item.price}
            />
          </View>
        ))}
      </ScrollView>
    </>
  );
};

export default WishlistScreen;
