import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youtube'; // in order to make the axios request in onTermSubmit

class App extends React.Component {
  state = {videos: []}; // will update with response.data.items (which holds the search results)

  onTermSubmit = async (term) => {
    // console.log(term); // verify that when user submits search, the term is being captured
    // youtube.get('/search', {
    const response = await youtube.get('/search', {
      params: {
        q: term // the arguement passed in on the onSubmit function
      }
    });
    // console.log(response.data.items);  <-- the data needed

    this.setState({videos: response.data.items}); // take response, update state with response
  };

  render() {
    return (
      // in order for the VideoList to work, need to give the video list the list of video objects fetched
      // in order to know what to render on the screen. videos will the prop that will be rendered out in VideoList
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;

// the api is restricted to localhost calls;

/*
the onTermSubmit method will be called anytime a user submits a form from the searchbar
the onFormSubmit can now be passed down to SearchBar
*/
