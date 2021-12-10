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

function IconCardVAs(props) {
  return (
    <Svg width={101} height={147} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Defs>
        <RadialGradient
          cx="48.712%"
          cy="29.992%"
          fx="48.712%"
          fy="29.992%"
          r="49.95%"
          gradientTransform="matrix(-1 0 0 -.94979 .974 .585)"
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
          r="75.853%"
          gradientTransform="scale(.8885 1) rotate(-31.196 .31 .25)"
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
          r="83.842%"
          gradientTransform="matrix(.6454 -.5058 .37843 .86265 -.02 .154)"
          id="c"
        >
          <Stop stopColor="#FFF" stopOpacity={0.29} offset="0%" />
          <Stop stopOpacity={0} offset="100%" />
        </RadialGradient>
      </Defs>
      <G fillRule="nonzero" fill="none">
        <Path
          d="M100.517 142.367a4.145 4.145 0 0 1-4.136 4.134h-92a4.144 4.144 0 0 1-4.131-4.134V4.879A4.144 4.144 0 0 1 4.379.744h92a4.146 4.146 0 0 1 4.136 4.135v137.488h.002Z"
          fill="#FFF"
          stroke="#000"
          strokeWidth={0.5}
        />
        <Text
          transform="translate(3.859)"
          fill="#DF0000"
          fontFamily="ArialMT, Arial"
          fontSize={17}
        >
          <TSpan x={0} y={15}>
            {"A"}
          </TSpan>
        </Text>
        <Path
          d="M47.964 0c-13.323 0-15.1 13.369-15.1 13.369S31.085 0 17.764 0C8.438 0 0 5.994 0 17.3c0 14.941 27.029 29.967 32.866 51.907C38.42 47.286 65.732 32.242 65.732 17.3 65.728 5.993 57.29 0 47.964 0Z"
          fill="url(#a)"
          transform="translate(17.28 39.584)"
        />
        <Path
          d="M.841 27.83S-.578 10.536 4.861 5.453C10.974-.26 29.483 3.371 29.483 3.371s-12.582 4.524-17.587 8.847C7.11 16.351.841 27.83.841 27.83Z"
          fill="url(#b)"
          transform="translate(17.28 39.584)"
        />
        <Path
          d="M32.34 22.67s2.6-16.093 7.917-19.49c5.974-3.818 19.578 3.706 19.578 3.706s-10.069 3.631-14.884 6.434c-4.6 2.68-12.611 9.35-12.611 9.35Z"
          fill="url(#c)"
          transform="translate(17.28 39.584)"
        />
        <Path
          d="M14.142 20.027a3.768 3.768 0 0 0-3.7 3.279 3.768 3.768 0 0 0-3.7-3.279 4.111 4.111 0 0 0-4.357 4.244c0 3.665 6.63 7.351 8.062 12.733 1.353-5.377 8.052-9.071 8.052-12.736a4.111 4.111 0 0 0-4.357-4.241Z"
          fill="#DF0000"
        />
        <Text
          transform="rotate(180 48.528 73.28)"
          fill="#DF0000"
          fontFamily="ArialMT, Arial"
          fontSize={17}
        >
          <TSpan x={0} y={15}>
            {"A"}
          </TSpan>
        </Text>
        <Path
          d="M86.773 126.537a3.768 3.768 0 0 0 3.7-3.279 3.768 3.768 0 0 0 3.709 3.279 4.111 4.111 0 0 0 4.357-4.244c0-3.665-6.63-7.351-8.062-12.733-1.362 5.377-8.062 9.068-8.062 12.733a4.111 4.111 0 0 0 4.358 4.244Z"
          fill="#DF0000"
        />
      </G>
    </Svg>
  );
}

export default IconCardVAs;
