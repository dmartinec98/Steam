import { View, Text, ScrollView, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import HeaderComponent from "../components/HomeHeaderComponent";
import FeaturedRow from "../components/FeaturedRow";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GameCard from "../components/GameCard";
import * as SecureStore from "expo-secure-store";

import supabase from "../config/supabaseService";

const HomeScreen = ({ route }) => {
  const { userId } = route.params;

  const [gameFetchError, setGameFetchError] = useState(null);
  const [profileFetchError, setProfileFetchError] = useState(null);
  const [games, setGames] = useState(null);
  const [profile, setProfile] = useState("");

  useEffect(() => {
    const fetchGames = async () => {
      const { data, error } = await supabase.from("Games").select();

      if (error) {
        setGameFetchError("Could not fetch the games");
        setGames(null);
      }

      if (data) {
        setGames(data);
        setGameFetchError(null);
      }
    };

    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select()
        .eq("id", userId)
        .single();

      if (error) {
        setProfileFetchError("Could not fetch the user");
        setProfile(null);
      }

      if (data) {
        setProfile(data);
        setProfileFetchError(null);
      }
    };
    fetchProfile();
    fetchGames();
  }, []);

  return (
    <>
      <HeaderComponent
        userId={userId}
        imgUrl={profile.imgurl}
        balance={profile.balance}
      />
      <View className="pb-3">
        <ScrollView className="bg-gray-100">
          <FeaturedRow userId={userId} />
        </ScrollView>
      </View>
      <View className="flex-row justify-around pb-2">
        <Text className="p-2 rounded-md bg-gray-300">Popular</Text>
        <Text className="p-2 rounded-md bg-gray-300">Top Rated</Text>
        <Text className="p-2 rounded-md bg-gray-300">Free</Text>
        <Text className="p-2 rounded-md bg-gray-300">Upcoming</Text>
      </View>
      {profileFetchError && <Text>Error fetching user data!</Text>}
      {gameFetchError && <Text>Error fetching games!</Text>}
      {games && (
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
              userId={userId}
            ></GameCard>
          )}
        />
      )}
    </>
  );
};

export default HomeScreen;
