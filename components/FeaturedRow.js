import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import FeaturedGameCard from "./FeaturedGameCard";
import React, { useState, useEffect } from "react";

import supabase from "../config/supabaseService";

const FeaturedRow = ({ userId }) => {
  const [featuredGame, setFeaturedGame] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      const { data, error } = await supabase
        .from("Games")
        .select()
        .eq("featured", true);

      if (error) {
        setFetchError("Could not fetch the games");
        setFeaturedGame(null);
      }

      if (data) {
        setFeaturedGame(data);
        setFetchError(null);
      }
    };

    fetchGames();
  }, []);

  return (
    <View>
      {fetchError && <Text>Failed to fetch featured games!</Text>}
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {featuredGame &&
          featuredGame.map((game) => (
            <FeaturedGameCard
              key={game.id}
              id={game.id}
              imgUrl={game.imgUrl}
              title={game.title}
              rating={game.rating}
              price={game.price}
              ganre={game.ganre}
              desc={game.desc}
              userId={userId}
            />
          ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
