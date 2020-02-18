import axios from 'axios'; // npm install --save axios

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

//

/*
API is configured to only work with localhost - changed trying to make it work... 
https://developers.google.com/youtube/v3/docs/search/list
snippet: Information about the video including title, description; overview; 
q: short for query, used to represent the search term

*/
