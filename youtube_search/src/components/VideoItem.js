import './VideoItem.css';
import React from 'react';

// const VideoItem = ({ video, onVideoSelect }) => {
const VideoItem = (props) => {
  console.log(props.video.snippet);
  return (
    // ** Need to make note to practice naming the root div of each component, the actual name of the component for referncing.
    // the onClick event is allowing the app to pass data BACK UP TO THE PARENT APP COMPONENT.
    <div onClick={() => props.onVideoSelect(props.video)} className="item video-itm">
      <img
        className="ui image"
        // src={props.video.snippet.thumbnails.default.url}
        src={props.video.snippet.thumbnails.medium.url}
        alt={props.video.snippet.title}
      />
      <div className="content">
        <div className="header">{props.video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;

/*
to reach the title, video.snippit.title or props.video.snippet.title (snippit is where it's located)
- I chose NOT to destructure; for now, I want to quickly know where the data/info is coming from... 
- by returning this, I am getting 5 title names being render; next is to continue the rest of the setup.
  - also need any image 
- the .item class is a semantics ui related class
- className= "ui image" is to get a rounded image to side
    - reference link: https://react.semantic-ui.com/elements/list/#content-image

*/
