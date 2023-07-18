import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import React from "react";
import GameCard from "./GameCard";

const FeaturedRow = ({ title, description, featuredCategory }) => {
  return (
    <View>
      
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <GameCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="aaa"
          rating={4.5}
          ganre="action"
        />
        <GameCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="aaa"
          rating={4.5}
          ganre="action"
        />
        <GameCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="aaa"
          rating={4.5}
          ganre="action"
        />
        <GameCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="aaa"
          rating={4.5}
          ganre="action"
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
