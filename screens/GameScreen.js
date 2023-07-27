import { View, Text } from "react-native";
import React from "react";
import GameInfo from "../components/GameInfo";

const GameScreen = ({ id, title, desc }) => {
  return (
    <View>
      <GameInfo id={id} title={title} desc={desc}></GameInfo>
    </View>
  );
};

export default GameScreen;
