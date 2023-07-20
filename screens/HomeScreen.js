import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";

import HeaderComponent from "../components/HomeHeaderComponent";

import FeaturedRow from "../components/FeaturedRow";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const HomeScreen = () => {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <HeaderComponent />
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <FeaturedRow
          id="123123"
          title="Recommended"
          description="Primjer necega kaj bu priakzano"
        />
      </ScrollView>
    </>
  );
};

export default HomeScreen;
