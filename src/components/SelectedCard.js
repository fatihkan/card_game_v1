import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { IconCardVAs } from "../icons";

const SelectedCard = (props) => {
  const { Dimensions, select } = props;
  const { width, height } = Dimensions;
  const [selected, setSelected] = useState(select);
  return (
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        borderWidth: 1,
        borderColor: "#dedede",
        borderStyle: "dashed",
        borderRadius: 1,
        height: 146,
        width: 100,
        left: width / 2 - 100 / 2,
        marginTop: height / 4.5 - 104 / 2,
        alignItems: "center",
      }}
    >
      {props.children}
      {selected && <IconCardVAs />}
    </View>
  );
};

export default SelectedCard;
