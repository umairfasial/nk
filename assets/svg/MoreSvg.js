import React from "react";
import { Svg, G, Rect } from "react-native-svg";
import PropTypes from "prop-types";

export const MoreSvg = (props) => {
  return (
    <Svg width="24" height="16" viewBox="0 0 24 16">
      <G id="More_Inactive" transform="translate(149 -1887)">
        <Rect
          id="Rectangle_350"
          data-name="Rectangle 350"
          width="24"
          height="2"
          transform="translate(-149 1887)"
          fill={props?.fill || "#c4c4c4"}
        />
        <Rect
          id="Rectangle_351"
          data-name="Rectangle 351"
          width="24"
          height="2"
          transform="translate(-149 1894)"
          fill={props?.fill || "#c4c4c4"}
        />
        <Rect
          id="Rectangle_352"
          data-name="Rectangle 352"
          width="24"
          height="2"
          transform="translate(-149 1901)"
          fill={props?.fill || "#c4c4c4"}
        />
      </G>
    </Svg>
  );
};

MoreSvg.propTypes = {
  fill: PropTypes.string,
};
