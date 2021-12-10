import * as React from "react";
import Svg, { Path } from "react-native-svg";

function IconExit(props) {
  const { color } = props;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={27}
      height={27}
      viewBox="0 0 27 27"
      {...props}
    >
      <Path
        d="M10.635 18.885L12.75 21l7.5-7.5-7.5-7.5-2.115 2.115L14.5 12H0v3h14.505l-3.87 3.885zM24 0H3a3 3 0 00-3 3v6h3V3h21v21H3v-6H0v6a3 3 0 003 3h21a3.009 3.009 0 003-3V3a3.009 3.009 0 00-3-3z"
        fill={color}
      />
    </Svg>
  );
}

export default IconExit;
