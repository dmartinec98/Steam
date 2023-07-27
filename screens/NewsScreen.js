import { View, Text } from "react-native";
import React from "react";
import HeaderComponent from "../components/HeaderComponent";

const NewsScreen = () => {
  return (
    <View>
      <HeaderComponent screenName={"News"} />
      <Text>NewsScreen</Text>
    </View>
  );
};

export default NewsScreen;
