import {
  View,
  Text,
  Image,
  Touchable,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import HeaderComponent from "./HeaderComponent";
import { useRoute } from "@react-navigation/native";
import { HeartIcon } from "react-native-heroicons/outline";
import supabase from "../config/supabaseService";

const GameInfo = () => {
  const {
    params: { id, title, imgUrl, desc, rating, price, userId },
  } = useRoute();

  const [games, setGames] = useState([]);
  const [gameFetchError, setGameFetchError] = useState(null);
  const [gameExists, setGameExists] = useState(false);
  const [yourGames, setYourGames] = useState([]);
  const [gameOwned, setGameOwned] = useState(false);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchGames = async () => {
      const { data, error } = await supabase
        .from("wishlist")
        .select("game_id")
        .eq("user_id", userId);

      if (error) {
        setGameFetchError("Could not fetch the games");
        setGames(null);
      }

      if (data) {
        setGames(data);
        setGameFetchError(null);
        for (item of data) {
          if (item.game_id == id) {
            setGameExists(true);
          }
        }
      }
    };

    const fetchOwnedGames = async () => {
      const { data, error } = await supabase
        .from("ownedGames")
        .select("game_id")
        .eq("user_id", userId);

      if (error) {
        setGameFetchError("Could not fetch the games");
        setYourGames(null);
      }

      if (data) {
        setYourGames(data);
        setGameFetchError(null);
        for (item of data) {
          if (item.game_id == id) {
            setGameOwned(true);
          }
        }
      }
    };

    const fetchBalance = async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("balance")
        .eq("id", userId)
        .single();

      if (error) {
        console.log(error);
      }
      if (data) {
        setBalance(data.balance);
      }
    };

    fetchBalance();
    fetchGames();
    fetchOwnedGames();
  }, []);

  const handleOwned = async (e) => {
    if (balance - e < 0) {
      Alert.alert("Insufficient balance in wallet");
    } else {
      if (!gameOwned) {
        const { data, error } = await supabase
          .from("ownedGames")
          .insert({
            game_id: id,
            user_id: userId,
          })
          .select();

        if (error) {
          console.log(error);
        }
        if (data) {
          setGameOwned(true);
        }
        handleUpdate(e);
      } else {
        Alert.alert("You already purchased the game!");
      }
    }
  };

  const handleInsert = async (e) => {
    if (!gameExists) {
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
        setGameExists(true);
      }
    } else {
      Alert.alert("Game is already on your wishlist!");
    }
  };

  const handleUpdate = async (e) => {
    let helper = balance;
    helper = helper - e;
    const { error } = await supabase
      .from("profiles")
      .update({ balance: helper })
      .eq("id", userId);

    if (error) {
      console.log(error);
    }
    setBalance(helper);
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
        {!gameOwned && <Text className="p-2 ">${price}</Text>}
        {!gameOwned && (
          <TouchableOpacity
            onPress={() => {
              handleOwned(price);
            }}
          >
            <Text className="p-2 bg-gray-300 rounded-md mr-3">Buy</Text>
          </TouchableOpacity>
        )}
        {!gameExists && (
          <TouchableOpacity
            className="p-2 bg-gray-300 rounded-md mr-10"
            onPress={() => {
              handleInsert();
            }}
            disabled={gameExists}
          >
            <HeartIcon color="#000000" size={20} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default GameInfo;
