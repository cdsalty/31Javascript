import React from 'react';

const VideoItem = (props) => {
  // console.log(props);
  return (
    <div>
      <h4>{props.video.snippet.title}</h4>
      <img
        src={props.video.snippet.thumbnails.default.url}
        alt={props.video.snippet.title}
      />
    </div>
  );
};

export default VideoItem;

/*
to reach the title, video.snippit.title or props.video.snippet.title (snippit is where it's located)
by returning this, I am getting 5 title names being render; next is to continue the rest of the setup.
  - also need any image 

*/
