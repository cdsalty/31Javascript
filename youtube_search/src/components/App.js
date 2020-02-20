import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube'; // in order to make the axios request in onTermSubmit

class App extends React.Component {
  state = {videos: [], selectedVideo: null}; // will update with response.data.items (which holds the search results)

  // adding ComponentDidMount in order to set a default value when the page opens (will only happen on page load/once)
  componentDidMount() {
    this.onTermSubmit('buildings');
  }

  onTermSubmit = async (term) => {
    // console.log(term); // verify that when user submits search, the term is being captured
    const response = await youtube.get('/search', {
      params: {
        q: term // the arguement passed in on the onSubmit function
      }
    });
    // console.log(response.data.items);  <-- the data needed

    // The key to how state is getting updated.
    this.setState({
      videos: response.data.items, // take response, update state with response
      // set a default video in the video player div so user doesn't open up to blank page
      selectedVideo: response.data.items[0] // DEFAULT VIDEO when user searches
    });
  };

  // since this is a callback, defining as an arrow function?
  onVideoSelect = (video) => {
    // console.log('coming from inside the App component;', video);
    this.setState({selectedVideo: video});
  };

  render() {
    return (
      // in order for the VideoList to work, need to give the video list the list of video objects fetched
      // in order to know what to render on the screen. videos will the prop that will be rendered out in VideoList
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// the api is restricted to localhost calls;

/*
the onTermSubmit method will be called anytime a user submits a form from the searchbar
the onFormSubmit can now be passed down to SearchBar
<div className = "five wide column">: take up 5 of the 16 columns
*/
