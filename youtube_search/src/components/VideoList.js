import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
  const renderedList = props.videos.map((video) => {
    return <VideoItem video={video} />; // this will create a new array of videoItem components for each movie
  });
  return <div>{renderedList}</div>; // returning 5 VideoItems.
};

export default VideoList;
