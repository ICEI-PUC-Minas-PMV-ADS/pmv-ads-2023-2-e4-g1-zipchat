// icon:eye-fill | Bootstrap https://icons.getbootstrap.com/ | Bootstrap
import * as React from "react";
import Svg, { Path } from "react-native-svg";

function IconEyeFill(props) {
  return (
    <Svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <Path d="M10.5 8a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
      <Path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
    </Svg>
  );
}

export default IconEyeFill;
