import axios from 'axios';

const KEY = 'AIzaSyCtnWbxCwkJsEfM-emkhnvppTroT2YVE6Q';

// axios request setup
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3', // from youtube docs
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: `${KEY}`
  }
});

/*
https://developers.google.com/youtube/v3/docs/search/list
snippet: Information about the video including title, description; overview
q: short for query, it stands for the search term
*/
