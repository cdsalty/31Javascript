import React from 'react';

const VideoItem = (props) => {
  return (
    <div>
      <img
        src={props.video.snippet.thumbnails.snippet.medium.url}
        alt={props.video.snippet.title}
      />
      <h4>{props.video.snippet.title}</h4>
    </div>
  );
};

export default VideoItem;

/*
to reach the title, video.snippit.title or props.video.snippet.title 
by returning this, I am getting 5 title names being render; next is to continue the rest of the setup.
  - also need any image 

*/
