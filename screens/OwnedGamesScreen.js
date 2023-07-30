import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import SettingsHeaderComponent from "../components/SettingsHeaderComponent";

const OwnedGamesScreen = () => {
  const array = [
    { id: 1, imgUrl: "https://links.papareact.com/gn7" },
    { id: 2, imgUrl: "https://links.papareact.com/gn7" },
    { id: 3, imgUrl: "https://links.papareact.com/gn7" },
    { id: 4, imgUrl: "https://links.papareact.com/gn7" },
    { id: 5, imgUrl: "https://links.papareact.com/gn7" },
    { id: 6, imgUrl: "https://links.papareact.com/gn7" },
    { id: 7, imgUrl: "https://links.papareact.com/gn7" },
    { id: 8, imgUrl: "https://links.papareact.com/gn7" },
  ];
  return (
    <View>
      <SettingsHeaderComponent screenName={"Owned Games"} />
      <FlatList
        data={array}
        numColumns={3}
        keyExtractor={array.id}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#000",
              }}
              source={{ uri: item.imgUrl }}
              className="h-40 w-24 bg-gray-300 m-4"
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default OwnedGamesScreen;
