import React from 'react';
import PropTypes from 'prop-types';
import Video from 'react-native-video-player';
import {getHTTPSURL} from '../../utils/functions';

const VideoPlayer = React.memo(props => {
  const {
    uri = '',
    style = {},
    onLoad = e => {},
    onProgress = e => {},
  } = props || {};

  return (
    <Video
      style={style}
      video={{
        uri: getHTTPSURL(uri),
      }}
      autoplay
      onLoad={e => onLoad(e)}
      onProgress={e => onProgress(e)}
    />
  );
});

VideoPlayer.propTypes = {
  uri: PropTypes.string,
  style: PropTypes.object,
  onLoad: PropTypes.func,
  onProgress: PropTypes.func,
};

export default VideoPlayer;
