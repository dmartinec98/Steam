import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import NewsListItem from "../components/NewsListItem";

const NewsScreen = () => {
  const [news, setNews] = useState([
    {
      id: "123",
      imgUrl: "https://links.papareact.com/gn7",
      title: "Sushi simultaor1",
      desc: "Super duper game",
    },
    {
      id: "1",
      imgUrl: "https://links.papareact.com/gn7",
      title: "Sushi simultaor2",
      desc: "Super game",
    },
    {
      id: "12",
      imgUrl: "https://links.papareact.com/gn7",
      title: "Sushi simultaor3",
      desc: "Gr8 Game M8",
    },
    {
      id: "13",
      imgUrl: "https://links.papareact.com/gn7",
      title: "Sushi simultaor",
      desc: "AAAA",
    },
    {
      id: "15",
      imgUrl: "https://links.papareact.com/gn7",
      title: "Sushi simultaor",
      desc: "Super duper game",
    },
  ]);

  return (
    <View>
      <HeaderComponent screenName={"News"} />
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <NewsListItem
            id={item.id}
            imgUrl={item.imgUrl}
            title={item.title}
            desc={item.desc}
          ></NewsListItem>
        )}
      />
    </View>
  );
};

export default NewsScreen;
