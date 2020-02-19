import React from 'react';
import VideoItem from './VideoItem';

// props equal the videos getting fetched and returned. Need to put them in a list.
const VideoList = (props) => {
  const renderedList = props.videos.map((video) => {
    // create component that will represent each video object returned.
    return <VideoItem video={video} />; // this will create a new array of videoItem components for each movie
  });

  return <div className="ui relaxed divided list">{renderedList}</div>; // the div is holding/returning 5 VideoItems.
};

export default VideoList;

// VideoList Component will git the className of ui reladed divided list
// VideoItem will git the item className
