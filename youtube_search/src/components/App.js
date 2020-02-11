import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {
  onTermSubmit = (term) => {
    // console.log(term); // verify that when user submits search, the term is being captured
    // use the term to make a request from the youtube api by importing youtube.js and axios
    youtube.get('/search', {
      params: {
        q: term // the term the user submitted
      }
    });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
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
