// The final goal is to render a video and a description below it.
import React from 'react';

const VideoDetail = (props) => {
  if (!props.video) {
    // since the original value is null, this prevents an error that generates not able to read property of snippit
    return <div>Loading...</div>;
  } else {
    //click on the prop and the title will appear
    return (
      <div>
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
*/
