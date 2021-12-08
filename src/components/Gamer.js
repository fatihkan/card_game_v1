import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Gamer = ({ gamer, Dimensions, location }) => {
  const { width, height } = Dimensions;
  return (
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        ...(location === "top" && { alignItems: "center", borderColor: "red" }),
        ...(location === "left" && {
          borderColor: "gray",
          left: -125,
          marginTop: height / 2,
          width: width,
        }),
        ...(location === "right" && {
          borderColor: "blue",
          left: width - 165,
          marginTop: height / 2,
          width: width,
        }),
        ...(location === "bottom" && {
          borderColor: "yellow",
          alignItems: "center",
          top: height - 200,
        }),
      }}
    >
      <View
        style={{
          ...(location === "left" && { transform: [{ rotate: "90deg" }] }),
          ...(location === "right" && { transform: [{ rotate: "-90deg" }] }),
          borderWidth: 1,
          borderColor: "#707070",
          height: 30,
          width: width - 100,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>{gamer}</Text>
      </View>
    </View>
  );
};

export default Gamer;
