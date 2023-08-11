import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useRoute, useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import SettingsHeaderComponent from "../components/SettingsHeaderComponent";
import supabase from "../config/supabaseService";

const OwnedGamesScreen = ({ route }) => {
  const { userId } = route.params;
  const array = [
    { id: 1, imgUrl: "https://links.papareact.com/gn7" },
    { id: 2, imgUrl: "https://links.papareact.com/gn7" },
    { id: 3, imgUrl: "https://links.papareact.com/gn7" },
    { id: 4, imgUrl: "https://links.papareact.com/gn7" },
    { id: 5, imgUrl: "https://links.papareact.com/gn7" },
    { id: 6, imgUrl: "https://links.papareact.com/gn7" },
    { id: 7, imgUrl: "https://links.papareact.com/gn7" },
    { id: 8, imgUrl: "https://links.papareact.com/gn7" },
  ];

  const [gameFetchError, setGameFetchError] = useState(null);
  const [games, setGames] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      const { data, error } = await supabase
        .from("ownedGames")
        .select("Games(title,imgUrl)")
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
    <View>
      <SettingsHeaderComponent screenName={"Owned Games"} />
      <FlatList
        data={games}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#000",
              }}
              source={{ uri: item.Games.imgUrl }}
              className="h-40 w-24 bg-gray-300 m-4"
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default OwnedGamesScreen;
