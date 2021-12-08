import React from "react";
import { View, StyleSheet } from "react-native";

const SelectedCard = ({ Dimensions }) => {
  const { width, height } = Dimensions;
  const SIZE = width - 75;
  return (
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        padding: 30,
        paddingTop: height / 3 - SIZE / 2,
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: 104,
          width: 71,
          borderWidth: 1,
          borderColor: "#dedede",
          borderStyle: "dashed",
        }}
      ></View>
    </View>
  );
};

export default SelectedCard;
