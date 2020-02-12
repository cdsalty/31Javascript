import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youtube';

class App extends React.Component {
  state = {videos: []}; // will update with response.data.items (which holds the search results)

  onTermSubmit = async (term) => {
    // console.log(term); // verify that when user submits search, the term is being captured
    // use the term to make a request from the youtube api by importing youtube.js and axios
    // youtube.get('/search', {
    const response = await youtube.get('/search', {
      params: {
        q: term // the term the user submitted
      }
    });
    // console.log(response.data.items);
    this.setState({videos: response.data.items}); // update state with the search results
  };
  render() {
    return (
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
