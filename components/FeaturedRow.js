import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import React from "react";
import GameCard from "./GameCard";

const FeaturedRow = ({ title, description, featuredCategory }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#000000" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={true}
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
