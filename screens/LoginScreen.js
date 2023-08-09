import { View, Text, TextInput, Image, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import supabase from "../config/supabaseService";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signInWithEmail = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  };

  return (
    <SafeAreaView>
      <View className="space-x-2 mr-5 ml-5 mt-10 bg-gray-200 p-3 items-center h-10 rounded-md">
        <TextInput
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          autoCapitalize={"none"}
        />
      </View>
      <View className="space-x-2 mt-5 mr-5 ml-5 bg-gray-200 p-3 items-center h-10 rounded-md">
        <TextInput
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          value={password}
          autoCapitalize={"none"}
        />
      </View>
      <TouchableOpacity
        className="space-x-2 ml-5 mr-5 mt-2 bg-gray-400 p-3 items-center h-10 rounded-md"
        onPress={() => signInWithEmail()}
        disabled={loading}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;
