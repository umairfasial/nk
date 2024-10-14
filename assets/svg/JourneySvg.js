import React from 'react';
import {Svg, G, Path, Circle, Line} from 'react-native-svg';
import PropTypes from 'prop-types';

export const JourneySvg = props => {
  return (
    <Svg width="12.72" height="18" viewBox="0 0 12.72 18">
      <G
        id="My_Knowledge_Journey_Inactive"
        data-name="My Knowledge Journey_Inactive"
        transform="translate(-4.922 -2)">
        <Circle
          id="Ellipse_78"
          data-name="Ellipse 78"
          cx="1.8"
          cy="1.8"
          r="1.8"
          transform="translate(10.392 2)"
          fill={props?.fill || '#c4c4c4'}
        />
        <Path
          id="Path_106"
          data-name="Path 106"
          d="M10.724,6.4l2.34,1.8-1.17,4.14,1.53,2.07-.72,1.53L9.824,13.6a1.866,1.866,0,0,1-.63-1.89Z"
          transform="translate(-0.422 -0.44)"
          fill={props?.fill || '#c4c4c4'}
        />
        <Line
          id="Line_1"
          data-name="Line 1"
          y2="13.5"
          transform="translate(17.142 6.5)"
          fill="none"
          stroke={props?.fill || '#c4c4c4'}
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="1"
        />
        <Path
          id="Path_107"
          data-name="Path 107"
          d="M11,13l2.16,2.52a2.444,2.444,0,0,1,.54,1.53V21.1"
          transform="translate(-0.608 -1.1)"
          fill="none"
          stroke={props?.fill || '#c4c4c4'}
          stroke-miterlimit="10"
          stroke-width="2"
        />
        <Path
          id="Path_108"
          data-name="Path 108"
          d="M10.6,7.3l1.17.36a4.005,4.005,0,0,1,1.89,1.08l.72.72a1.337,1.337,0,0,0,1.26.36l2.25-.45"
          transform="translate(-0.568 -0.53)"
          fill="none"
          stroke={props?.fill || '#c4c4c4'}
          stroke-miterlimit="10"
          stroke-width="2"
        />
        <Path
          id="Path_109"
          data-name="Path 109"
          d="M8.99,21.36l1.62-4.5L9.17,15.6,7.1,21.36Z"
          transform="translate(-0.218 -1.36)"
          fill={props?.fill || '#c4c4c4'}
        />
        <Path
          id="Path_110"
          data-name="Path 110"
          d="M6.072,12.037h0a1.631,1.631,0,0,1-1.08-1.98l.54-1.8a3.288,3.288,0,0,1,3.96-2.07h0l-1.44,4.77A1.525,1.525,0,0,1,6.072,12.037Z"
          transform="translate(0 -0.407)"
          fill={props?.fill || '#c4c4c4'}
        />
      </G>
    </Svg>
  );
};

JourneySvg.propTypes = {
  fill: PropTypes.string,
};
