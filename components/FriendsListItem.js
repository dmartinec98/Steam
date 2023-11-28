import { View, Text, ScrollView, TouchableOpacity, Image, FlatList } from "react-native";
import React, { useState, useEffect } from "react";

import supabase from "../config/supabaseService";

const FriendsListItem = ({ id }) => {
  const [friends, setFriends] = useState(null);
  const [friendsError, setFriendsFetchError] = useState(null);

  useEffect(() => {
    const fetchFriends = async () => {
      const { data, error } = await supabase
        .from("friends")
        .select(
          `
          profiles!friends_friendId_fkey ( id ,username, imgurl )
        `
        )
        .eq("userId", id);

      if (error) {
        setFriendsFetchError("Could not fetch friends");
        setFriends(null);
      }

      if (data) {
        setFriends(data);
        console.log(data);
        setFriendsFetchError(null);
      }
    };

    fetchFriends();
  }, []);

  return (
    <View>
      <FlatList
        data={friends}
        renderItem={({ item }) => (
          <TouchableOpacity className="flex-row bg-white pt-2 pb-2 rounded-md m-1">
            <Image
              source={{ uri: item.profiles.imgurl }}
              className="rounded-md h-10 w-10 bg-gray-300 p-4 ml-2 mr-2"
            />
            <View className="justify-center">
              <Text className="font-bold">{item.profiles.username}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default FriendsListItem;
