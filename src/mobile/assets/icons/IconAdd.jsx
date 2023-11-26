// icon:add | Ionicons https://ionicons.com/ | Ionic Framework
import * as React from "react";
import Svg, { Path } from "react-native-svg";

function IconAdd(props) {
  return (
    <Svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M256 112v288M400 256H112"
      />
    </Svg>
  );
}

export default IconAdd;
