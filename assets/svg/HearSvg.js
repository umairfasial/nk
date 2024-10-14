import React from "react";
import { Svg, G, Path } from "react-native-svg";
import PropTypes from "prop-types";

export const HeartSvg = (props) => {
  return (
    <Svg width="17.339" height="15.307" viewBox="0 0 17.339 15.307">
      <G id="like" transform="translate(0 -30)">
        <G id="Group_168" data-name="Group 168" transform="translate(0 30)">
          <Path
            id="Path_189"
            data-name="Path 189"
            d="M12.733,30a4.105,4.105,0,0,0-2.564.886,5.84,5.84,0,0,0-1.5,1.8,5.84,5.84,0,0,0-1.5-1.8A4.105,4.105,0,0,0,4.606,30,4.707,4.707,0,0,0,0,35c0,3.077,2.47,5.182,6.21,8.369.635.541,1.355,1.155,2.1,1.809a.542.542,0,0,0,.713,0c.748-.654,1.468-1.268,2.1-1.809,3.739-3.186,6.209-5.292,6.209-8.368A4.707,4.707,0,0,0,12.733,30Z"
            transform="translate(0 -30)"
            fill={props?.fill || "#c4c4c4"}
          />
        </G>
      </G>
    </Svg>
  );
};

HeartSvg.propTypes = {
  fill: PropTypes.string,
};
