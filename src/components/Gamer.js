import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

const Gamer = (props) => {
  const { gamer, Dimensions, location } = props;
  const { width, height } = Dimensions;
  const locationRight = Platform.OS === "android" ? 170 : 160;
  const locationBottom = Platform.OS === "android" ? 230 : 210;
  return (
    <>
      <View>{props.children}</View>
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          borderWidth: 1,
          alignItems: "center",
          height: 30,
          borderColor: "#707070",
          backgroundColor: "white",
          justifyContent: "center",
          ...(location === "top" && {
            width: width - 100,
            left: width / 2 - (width - 100) / 2,
          }),
          ...(location === "left" && {
            left: -(width - 130) / 2,
            width: width - 100,
            marginTop: height / 2.5,
            transform: [{ rotate: "90deg" }],
          }),
          ...(location === "right" && {
            left: width - locationRight,
            width: width - 100,
            marginTop: height / 2.5,
            transform: [{ rotate: "-90deg" }],
          }),
          ...(location === "bottom" && {
            top: height - locationBottom,
            width: width - 100,
            left: width / 2 - (width - 100) / 2,
          }),
        }}
      >
        <View>
          <Text>{gamer}</Text>
        </View>
      </View>
    </>
  );
};

export default Gamer;
