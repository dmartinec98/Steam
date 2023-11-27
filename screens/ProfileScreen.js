import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Keyboard
} from "react-native";
import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import SettingsHeaderComponent from "../components/SettingsHeaderComponent";
import ProfileMenu from "../components/ProfileMenu";
import Comments from "../components/Comments";
import { useState, useEffect } from "react";
import { PaperAirplaneIcon } from "react-native-heroicons/outline";
import CommentItem from "../components/CommentItem";

import supabase from "../config/supabaseService";

const ProfileScreen = ({ route }) => {
  const { userId, profileId } = route.params;
  const [komentari, setKomentari] = useState([]);
  const [komentar, setKomentar] = useState("");

  useEffect(() => {
    console.log(userId);
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const { data, error } = await supabase
      .from("profileComments")
      .select("id, content, profiles(imgurl, username)")
      .eq("profile_id", profileId);

    if (data) {
      console.log(data);
      setKomentari(data);
    }
  };

  const handleKomentar = async () => {
    if (komentar != null && komentar != "undefined" && komentar != "") {
      const { data, error } = await supabase.from("profileComments").insert({
        profile_id: profileId,
        user_id: userId,
        content: komentar,
      });

      fetchComments();
    }

    setKomentar("");
    Keyboard.dismiss();
  };

  return (
    <View>
      <SettingsHeaderComponent screenName={"Profile"} />
      <View className="flex-row">
        <Image
          style={{
            borderWidth: 1,
            borderColor: "#F3F3F4",
          }}
          source={{ uri: "https://links.papareact.com/gn7" }}
          className="h-20 w-20 bg-gray-300 p-4 mr-4 ml-10 rounded-md "
        />
        <Text className="mt-5">Nickname</Text>
      </View>
      <View className="flex-row ml-10 mt-2 ">
        <Text className="mr-3 rounded-full  h-10 w-10 text-center pt-2 border-black border-2">
          100
        </Text>
        <Text className="p-2">Steam Level</Text>
      </View>
      <Text className="mt-2 ml-3 mr-3">
        Tu ide neki description
        dududududuudududuudududududududududududuudududududududududuududududududududududududu
      </Text>
      <ProfileMenu></ProfileMenu>
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
    </View>
  );
};

export default ProfileScreen;
