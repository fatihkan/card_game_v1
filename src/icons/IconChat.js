import * as React from "react";
import Svg, { Path } from "react-native-svg";

function IconChat(props) {
  const { color } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 30 30"
      {...props}
    >
      <Path
        d="M27 0H3A3 3 0 00.015 3L0 30l6-6h21a3.009 3.009 0 003-3V3a3.009 3.009 0 00-3-3zM6 10.5h18v3H6zM18 18H6v-3h12zm6-9H6V6h18z"
        fill={color}
      />
    </Svg>
  );
}

export default IconChat;
