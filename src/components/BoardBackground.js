import React from "react";
import Svg, { RadialGradient, Defs, Rect, Stop } from "react-native-svg";
import { StyleSheet } from "react-native";

const BoardBackground = ({ Dimensions, startColor, finishColor }) => {
  const { width, height } = Dimensions;
  return (
    <Svg style={StyleSheet.absoluteFill}>
      <Defs>
        <RadialGradient id="gradient" cx="10%" cy="8%">
          <Stop offset="0%" stopColor={startColor} />
          <Stop offset="50%" stopColor={finishColor} />
        </RadialGradient>
      </Defs>
      <Rect
        x={0}
        y={0}
        width={width * 5}
        height={height * 5}
        fill="url(#gradient)"
      />
    </Svg>
  );
};

export default BoardBackground;
