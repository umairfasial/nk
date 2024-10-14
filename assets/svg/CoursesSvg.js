import React from "react";
import { Svg, G, Path } from "react-native-svg";
import PropTypes from "prop-types";

export const CoursesSvg = (props) => {
  return (
    <Svg
      id="Courses_Active"
      width={props?.size || "17"}
      height={props?.size || "17"}
      viewBox="0 0 17.001 17"
    >
      <G id="Group_56" dataName="Group 56" transform="translate(0 0)">
        <Path
          id="Path_85"
          dataName="Path 85"
          d="M7.375,958.362A1.383,1.383,0,0,0,6,959.74v5.012a1.383,1.383,0,0,0,1.375,1.378h5a1.383,1.383,0,0,0,1.375-1.378V959.74a1.383,1.383,0,0,0-1.375-1.378Z"
          transform="translate(-6 -958.362)"
          fill={props?.fill || "#c4c4c4"}
          fill-rule="evenodd"
        />
        <Path
          id="Path_86"
          dataName="Path 86"
          d="M55.274,958.362A1.383,1.383,0,0,0,53.9,959.74v5.012a1.383,1.383,0,0,0,1.375,1.378h5a1.382,1.382,0,0,0,1.373-1.378V959.74a1.382,1.382,0,0,0-1.373-1.378Z"
          transform="translate(-44.645 -958.362)"
          fill={props?.fill || "#c4c4c4"}
          fill-rule="evenodd"
        />
        <Path
          id="Path_87"
          dataName="Path 87"
          d="M7.375,1006.14A1.383,1.383,0,0,0,6,1007.518v5.014a1.383,1.383,0,0,0,1.375,1.378h5a1.383,1.383,0,0,0,1.375-1.378v-5.014a1.383,1.383,0,0,0-1.375-1.378Z"
          transform="translate(-6 -996.91)"
          fill={props?.fill || "#c4c4c4"}
          fill-rule="evenodd"
        />
        <Path
          id="Path_88"
          dataName="Path 88"
          d="M55.274,1006.14a1.383,1.383,0,0,0-1.375,1.378v5.014a1.383,1.383,0,0,0,1.375,1.378h5a1.382,1.382,0,0,0,1.373-1.378v-5.014a1.382,1.382,0,0,0-1.373-1.378Z"
          transform="translate(-44.645 -996.91)"
          fill={props?.fill || "#c4c4c4"}
          fill-rule="evenodd"
        />
      </G>
    </Svg>
  );
};

CoursesSvg.propTypes = {
  size: PropTypes.number,
  fill: PropTypes.string,
};
