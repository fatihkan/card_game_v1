import * as React from "react";
import Svg, { Path } from "react-native-svg";

function IconResults(props) {
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
        d="M19.5 8.25V0h-9v8.25l4.5 4.5zM8.25 10.5H0v9h8.25l4.5-4.5zm2.25 11.25V30h9v-8.25l-4.5-4.5zM21.75 10.5l-4.5 4.5 4.5 4.5H30v-9z"
        fill={color}
      />
    </Svg>
  );
}

export default IconResults;
