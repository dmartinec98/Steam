import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
import CommentItem from "./CommentItem";
import { PaperAirplaneIcon } from "react-native-heroicons/outline";

import supabase from "../config/supabaseService";

const Comments = ({ gameId, userId }) => {
  const [komentari, setKomentari] = useState([]);
  const [komentar, setKomentar] = useState("");

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const { data, error } = await supabase
      .from("gameComments")
      .select("id, content, profiles(imgurl, username)")
      .eq("game_id", gameId);

    if (data) {
      setKomentari(data);
    }
  };

  const handleKomentar = async () => {
    if (komentar != null && komentar != "undefined" && komentar != "") {
      const { data, error } = await supabase.from("gameComments").insert({
        game_id: gameId,
        user_id: userId,
        content: komentar,
      });

      fetchComments();
    }

    setKomentar("");
    Keyboard.dismiss();
  };

  return (
    <View className="m-1 mt-2 ">
      <View>
        <Text className="text-lg p-2 rounded-md ">Comments</Text>
      </View>
      <View className="mt-2 mr-2 flex-row">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-10 w-10 bg-gray-300 p-4 rounded-md "
        />
        <View className="flex-1 ml-2 space-x-2  bg-gray-200 p-3 items-center h-10 rounded-md">
          <TextInput
            placeholder="Add a comment"
            onChangeText={(val) => {
              setKomentar(val);
            }}
            onSubmitEditing={() => {
              handleKomentar();
            }}
          />
        </View>
        <TouchableOpacity
          className="p-3"
          onPress={() => {
            handleKomentar();
          }}
        >
          <PaperAirplaneIcon color="#000000" size={20} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {komentari.map((item) => (
          <View key={item.id}>
            <CommentItem
              username={item.profiles.username}
              imgUrl={item.profiles.imgurl}
              content={item.content}
            ></CommentItem>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Comments;
