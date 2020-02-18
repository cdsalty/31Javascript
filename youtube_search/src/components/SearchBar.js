import React from 'react';

class SearchBar extends React.Component {
  state = {term: ''};

  onInputChange = (e) => {
    this.setState({term: e.target.value});
    // console.log(e.target.value);
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term); // ** how state is gets updated; the searchbar passes data up
    // inside App.js, the state's term will be passed into a function called, onTermSubmit. onTermSubmit is the prop
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input type="text" value={this.state.term} onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

/*
className = "ui segment"; ui segment is from semantic and draws a border around the div. 

to test input: this.state = {term: ''};, try this.state = {term: 'dagcarfceasd'};
*/
