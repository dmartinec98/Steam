import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Komponenta = () => {
  const [brojac, setBrojac] = useState(0);

  return (
    <View>
      <Text>{brojac}</Text>
      <TouchableOpacity onPress={() => setBrojac(brojac + 1)}>
        <Text> Uvečaj brojač</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Komponenta;
