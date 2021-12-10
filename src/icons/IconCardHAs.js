import * as React from "react";
import Svg, {
  Defs,
  RadialGradient,
  Stop,
  G,
  Path,
  Text,
  TSpan,
} from "react-native-svg";

function IconCardHAs(props) {
  return (
    <Svg width={90} height={62} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Defs>
        <RadialGradient
          cx="48.712%"
          cy="29.992%"
          fx="48.712%"
          fy="29.992%"
          r="49.95%"
          gradientTransform="matrix(-1 0 0 -.94975 .974 .585)"
          id="a"
        >
          <Stop stopColor="#DF0000" offset="0%" />
          <Stop stopColor="#DF0000" stopOpacity={0.671} offset="100%" />
        </RadialGradient>
        <RadialGradient
          cx="29.231%"
          cy="31.504%"
          fx="29.231%"
          fy="31.504%"
          r="75.851%"
          gradientTransform="scale(.88852 1) rotate(-31.196 .31 .25)"
          id="b"
        >
          <Stop stopColor="#FFF" stopOpacity={0.314} offset="0%" />
          <Stop stopOpacity={0} offset="100%" />
        </RadialGradient>
        <RadialGradient
          cx="23.218%"
          cy="26.937%"
          fx="23.218%"
          fy="26.937%"
          r="83.815%"
          gradientTransform="scale(.7485 1) rotate(-30.396 .271 .126)"
          id="c"
        >
          <Stop stopColor="#FFF" stopOpacity={0.29} offset="0%" />
          <Stop stopOpacity={0} offset="100%" />
        </RadialGradient>
      </Defs>
      <G fillRule="nonzero" fill="none">
        <Path
          d="M2.762 61.165A2.519 2.519 0 0 1 .25 58.65V2.759A2.517 2.517 0 0 1 2.762.25H86.29a2.518 2.518 0 0 1 2.512 2.509V58.65a2.519 2.519 0 0 1-2.512 2.513H2.762v.002Z"
          fill="#FFF"
          stroke="#000"
          strokeWidth={0.5}
        />
        <Text
          transform="rotate(90 43.406 45.848)"
          fill="#DF0000"
          fontFamily="ArialMT, Arial"
          fontSize={11}
        >
          <TSpan x={0} y={10}>
            {"A"}
          </TSpan>
        </Text>
        <Path
          d="M29.142 0c-8.094 0-9.175 8.122-9.175 8.122S18.886 0 10.792 0C5.127 0 0 3.642 0 10.512c0 9.077 16.421 18.206 19.967 31.535 3.374-13.318 19.967-22.457 19.967-31.535C39.934 3.642 34.808 0 29.142 0Z"
          fill="url(#a)"
          transform="rotate(90 27.305 37.9)"
        />
        <Path
          d="M.512 16.907S-.349 6.401 2.956 3.313C6.67-.158 17.912 2.048 17.912 2.048S10.27 4.797 7.23 7.423C4.322 9.934.512 16.907.512 16.907Z"
          fill="url(#b)"
          transform="rotate(90 27.305 37.9)"
        />
        <Path
          d="M19.65 13.776s1.581-9.78 4.81-11.843c3.629-2.32 11.89 2.251 11.89 2.251a75.262 75.262 0 0 0-9.038 3.909 79.348 79.348 0 0 0-7.662 5.683Z"
          fill="url(#c)"
          transform="rotate(90 27.305 37.9)"
        />
        <Path
          d="M77.089 8.69a2.289 2.289 0 0 0-1.992-2.248 2.289 2.289 0 0 0 1.992-2.253 2.5 2.5 0 0 0-2.578-2.647c-2.227 0-4.466 4.028-7.735 4.9 3.267.828 5.509 4.9 7.735 4.9a2.5 2.5 0 0 0 2.578-2.652Z"
          fill="#DF0000"
        />
        <Text
          transform="rotate(-90 29.638 29.425)"
          fill="#DF0000"
          fontFamily="ArialMT, Arial"
          fontSize={11}
        >
          <TSpan x={0} y={10}>
            {"A"}
          </TSpan>
        </Text>
        <Path
          d="M12.379 52.815c.01 1.141.86 2.1 1.992 2.248a2.289 2.289 0 0 0-1.992 2.253 2.5 2.5 0 0 0 2.578 2.647c2.227 0 4.466-4.028 7.735-4.9-3.267-.828-5.509-4.9-7.735-4.9a2.5 2.5 0 0 0-2.578 2.652Z"
          fill="#DF0000"
        />
      </G>
    </Svg>
  );
}

export default IconCardHAs;
