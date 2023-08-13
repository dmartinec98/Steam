import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useRoute } from "react";
import GameInfo from "../components/GameInfo";
import Comments from "../components/Comments";

const GameScreen = ({ route }) => {
  const { id, userId, title, desc } = route.params;

  return (
    <ScrollView>
      <GameInfo userId={userId} id={id} title={title} desc={desc}></GameInfo>
      <Comments gameId={id} userId={userId}></Comments>
    </ScrollView>
  );
};

export default GameScreen;
