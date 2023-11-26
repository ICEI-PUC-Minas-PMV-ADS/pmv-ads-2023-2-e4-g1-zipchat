// icon:logout-box-line | Remix Icon https://remixicon.com/ | Remix Design
import * as React from "react";
import Svg, { Path } from "react-native-svg";

function IconLogoutBoxLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M4 18h2v2h12V4H6v2H4V3a1 1 0 011-1h14a1 1 0 011 1v18a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zm2-7h7v2H6v3l-5-4 5-4v3z" />
    </Svg>
  );
}

export default IconLogoutBoxLine;
