import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
  const renderedList = props.videos.map((video) => {
    return <VideoItem video={video} />; // this will create a new array of videoItem components for each movie
  });
  return <div>{renderedList}</div>; // returning 5 VideoItems.
};

export default VideoList;

/*
Video List: will hold and return VideoItems
  // props carries the videos array

- could have destructured to const VideoList = ({videos}) => {
    and then refered to it as videos.length vs props.videos.length (don't have to reference props)

- Once I knew the props passed down were the videos array, all that's left to do is map through the videos and 
return a VideoItem for each one. 

VideoItem
- assigning a property of value and setting it equal to video. 
  - Video in this instance will represent the current video that's being mapped over.

** to refer back to the video object being returned, complete a search and in the console, under preview, select the link it's returning.

*/
