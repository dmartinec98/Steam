import { View, Text, FlatList, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import NewsListItem from "../components/NewsListItem";

import supabase from "../config/supabaseService";

const NewsScreen = () => {
  const [news, setNews] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const { data, error } = await supabase.from("news").select();

      if (error) {
        setFetchError("Could not fetch the news");
        setNews(null);
      }

      if (data) {
        setNews(data);
        setFetchError(null);
      }
    };

    fetchNews();
  }, []);

  return (
    <View>
      <HeaderComponent screenName={"News"} />

      {news && (
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          className="mb-32"
          data={news}
          renderItem={({ item }) => (
            <NewsListItem
              id={item.id}
              imgUrl={item.imgurl}
              title={item.title}
              desc={item.desc}
              content={item.content}
            ></NewsListItem>
          )}
        />
      )}

      {fetchError && <Text>{fetchError}</Text>}
    </View>
  );
};

export default NewsScreen;
