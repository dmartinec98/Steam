import { View, Text } from "react-native";
import React from "react";

const NewsListItem = ({ id, imgUrl, title, desc }) => {
  return (
    <View>
      <Text>{id}</Text>
      <Text>{imgUrl}</Text>
      <Text>{title}</Text>
      <Text>{desc}</Text>
    </View>
  );
};

export default NewsListItem;
