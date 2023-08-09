import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect } from "react";
import HeaderComponent from "../components/HeaderComponent";
import GameCard from "../components/GameCard";
import { useState } from "react";
import supabase from "../config/supabaseService";

const WishlistScreen = ({ route }) => {
  const { userId } = route.params;
  const [games, setGames] = useState([]);
  const [gameFetchError, setGameFetchError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      const { data, error } = await supabase
        .from("wishlist")
        .select()
        .eq("user_id", userId);

      if (error) {
        setGameFetchError("Could not fetch the games");
        setGames(null);
      }

      if (data) {
        setGames(data);
        setGameFetchError(null);
      }
    };

    fetchGames();
  }, []);

  return (
    <>
      <HeaderComponent screenName={"Wishlist"} />
      {games && (
        <ScrollView>
          {games.map((item) => (
            <View key={item.id}>
              <GameCard
                id={item.game_id}
                imgUrl={item.imgurl}
                title={item.name}
                rating={item.rating}
                ganre={item.ganre}
                price={item.price}
              />
            </View>
          ))}
        </ScrollView>
      )}
      {!games && <Text>Empty wishlist!</Text>}
    </>
  );
};

export default WishlistScreen;
