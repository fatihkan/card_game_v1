import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import BoardBackground from "../components/BoardBackground";
import Gamer from "../components/Gamer";
import SelectedCard from "../components/SelectedCard";

const Results = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <BoardBackground
        Dimensions={Dimensions.get("screen")}
        startColor={"#008111"}
        finishColor={"#000552"}
      />
      <SelectedCard Dimensions={Dimensions.get("screen")} />
      <Gamer
        Dimensions={Dimensions.get("screen")}
        gamer={"Ahmet"}
        location="top"
      />
      <Gamer
        Dimensions={Dimensions.get("screen")}
        gamer={"Ahmet"}
        location="left"
      />
      <Gamer
        Dimensions={Dimensions.get("screen")}
        gamer={"Ahmet"}
        location="right"
      />
      <Gamer
        Dimensions={Dimensions.get("screen")}
        gamer={"Ahmet"}
        location="bottom"
      />
    </View>
  );
};

export default Results;
