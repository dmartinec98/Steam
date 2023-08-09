import { View, Text } from "react-native";
import React from "react";
import GameInfo from "../components/GameInfo";
import Comments from "../components/Comments";

const GameScreen = ({ userId, id, title, desc }) => {
  return (
    <View>
      <GameInfo userId={userId} id={id} title={title} desc={desc}></GameInfo>
      <Comments></Comments>
    </View>
  );
};

export default GameScreen;
