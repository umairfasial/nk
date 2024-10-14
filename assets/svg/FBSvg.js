import React from "react";
import { Svg, G, Circle, Path } from "react-native-svg";
import PropTypes from "prop-types";

export const FBSvg = (props) => {
  return (
    <Svg
      width={props?.size || "47"}
      height={props?.size || "47"}
      viewBox="0 0 47 47"
    >
      <G
        id="Facebook_Logo"
        dataName="Facebook Logo"
        transform="translate(0 -0.452)"
      >
        <Circle
          id="Ellipse_1"
          dataName="Ellipse 1"
          cx="23.5"
          cy="23.5"
          r="23.5"
          transform="translate(0 0.452)"
          fill="#fff"
        />
        <G
          id="Facebook-f_Logo-Blue-Logo.wine"
          transform="translate(3.559 3.559)"
        >
          <Path
            id="Path_5"
            dataName="Path 5"
            d="M39.528,19.764A19.764,19.764,0,1,0,16.676,39.288V25.477H11.658V19.764h5.018V15.41c0-4.953,2.951-7.69,7.465-7.69a30.394,30.394,0,0,1,4.424.386V12.97H26.073c-2.455,0-3.221,1.524-3.221,3.087v3.707h5.481l-.876,5.713H22.852V39.288A19.769,19.769,0,0,0,39.528,19.764"
            fill="#1877f2"
          />
        </G>
      </G>
    </Svg>
  );
};

FBSvg.propTypes = {
  size: PropTypes.number,
};
