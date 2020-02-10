import React, {Component} from 'react';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {term: ''};
  }
  render() {
    return (
      <div className="search-bar ui segment">
        <div className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input type="text" value={this.state.term} />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;

/*
className = "ui segment"; ui segment is from semantic and draws a border around the div. 

to test input: this.state = {term: ''};, try this.state = {term: 'dagcarfceasd'};
*/
