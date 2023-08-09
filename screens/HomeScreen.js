import { View, Text, ScrollView, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import HeaderComponent from "../components/HomeHeaderComponent";
import FeaturedRow from "../components/FeaturedRow";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GameCard from "../components/GameCard";

import supabase from "../config/supabaseService";

const HomeScreen = () => {
  const [fetchError, setFetchError] = useState(null);
  const [games, setGames] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      const { data, error } = await supabase.from("Games").select();

      if (error) {
        setFetchError("Could not fetch the games");
        setGames(null);
      }

      if (data) {
        setGames(data);
        setFetchError(null);
      }
    };

    fetchGames();
  }, []);

  return (
    <>
      <HeaderComponent />
      <View className="pb-3">
        <ScrollView className="bg-gray-100">
          <FeaturedRow />
        </ScrollView>
      </View>
      <View className="flex-row justify-around pb-2">
        <Text className="p-2 rounded-md bg-gray-300">Popular</Text>
        <Text className="p-2 rounded-md bg-gray-300">Top Rated</Text>
        <Text className="p-2 rounded-md bg-gray-300">Free</Text>
        <Text className="p-2 rounded-md bg-gray-300">Upcoming</Text>
      </View>
      {fetchError && <Text>Error fetching games!</Text>}
      {games && (
        <FlatList
          data={games}
          renderItem={({ item }) => (
            <GameCard
              id={item.id}
              imgUrl={item.imgUrl}
              title={item.title}
              desc={item.desc}
              ganre="simulation"
              price={item.price}
              rating={item.rating}
            ></GameCard>
          )}
        />
      )}
    </>
  );
};

export default HomeScreen;
