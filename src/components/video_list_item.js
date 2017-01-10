import React from 'react';

const VideoListItem = (props) => {
  const video = props.video;

  return (
    <li>{video.snippet.title}</li>
  );
};

export default VideoListItem;
