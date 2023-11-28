import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import SettingsHeaderComponent from "../components/SettingsHeaderComponent";

const EditProfileScreen = () => {
  const [username, setUsername] = useState("");
  const [pic, setPic] = useState("");

  return (
    <View>
      <SettingsHeaderComponent screenName={"Edit Profile"} />
      <Text>Username</Text>
      <View className="space-x-2 mr-5 ml-5 mt-3 bg-gray-200 p-3 items-center h-10 rounded-md">
        <TextInput
          placeholder="username"
          onChangeText={(text) => setUsername(text)}
          value={username}
          autoCapitalize={"none"}
        />
      </View>

      <Text>Profile pic</Text>
      <View className="space-x-2 mr-5 ml-5 mt-3 bg-gray-200 p-3 items-center h-10 rounded-md">
        <TextInput
          placeholder="imgUrl"
          onChangeText={(text) => setPic(text)}
          value={pic}
          autoCapitalize={"none"}
        />
      </View>

      <Text className="space-x-2 ml-5 mr-5 mt-2 bg-gray-400 p-3 items-center h-10 rounded-md">Save profile</Text>
    </View>
  );
};

export default EditProfileScreen;
