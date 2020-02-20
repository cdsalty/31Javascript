// The final goal is to render a video and a description below it.
import React from 'react';

const VideoDetail = (props) => {
  if (!props.video) {
    // since the original value is null, this prevents an error that generates not able to read property of snippit
    return <div>Loading...</div>;
  } else {
    //click on the prop and the title will appear

    const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;

    return (
      <div>
        <div className="ui embed">
          <iframe src={videoSrc} title="video_player" />
        </div>
        <div className="ui segment">
          <h4 className="ui header">{props.video.snippet.title}</h4>
          <p>{props.video.snippet.description}</p>
        </div>
      </div>
    );
  }
};

export default VideoDetail;

/*
To go back and verify the snippet.title location, network log and explore the object

// Problem, can't read property of null since that's the original state's setup;
  return <div>{props.video.snippet.title}</div>;

  Video player will require an iframe tag
  ui embed prepares the div by styling it and preparing it for a video embedded player.

  Example of embeded link from youtube used for the videosrc variable:
  <iframe width="560" height="315" src="https://www.youtube.com/embed/XzglEA-LRLA" frameborder="0" 
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  - I need to make use of... https://www.youtube.com/embed/
*/
