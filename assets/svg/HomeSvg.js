import React from "react";
import { Svg, G, Path } from "react-native-svg";
import PropTypes from "prop-types";

export const HomeSvg = (props) => {
  return (
    <Svg
      width={props?.size || "17"}
      height={props?.size || "17"}
      viewBox="0 0 17.378 17.379"
    >
      <Path
        id="Home_Active"
        d="M16.911,7.559h0L9.82.468a1.6,1.6,0,0,0-2.263,0L.472,7.554l-.007.007a1.6,1.6,0,0,0,1.065,2.726l.049,0h.283v5.217a1.875,1.875,0,0,0,1.873,1.872H6.507a.509.509,0,0,0,.509-.509v-4.09a.855.855,0,0,1,.854-.854H9.507a.855.855,0,0,1,.854.854v4.09a.509.509,0,0,0,.509.509h2.774a1.875,1.875,0,0,0,1.873-1.872V10.289h.262a1.6,1.6,0,0,0,1.132-2.731Zm0,0"
        transform="translate(0 0.001)"
        fill={props?.fill || "#c4c4c4"}
      />
    </Svg>
  );
};

HomeSvg.propTypes = {
  size: PropTypes.number,
  fill: PropTypes.string,
};
