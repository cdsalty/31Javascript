import React from 'react';

class SearchBar extends React.Component {
  state = {term: ''};

  onInputChange = (e) => {
    this.setState({term: e.target.value});
    // console.log(e.target.value);
  };

  onFormSubmit = (e) => {
    e.preventDefault(); // prevent the page from refreshing on enter
    // next step is to call on the callback passed into the searchbar component, inside App (this.props.onFormSubmit)
    // this prop will need to be called anytime the user submits the form; which will be called this.props.fromAppDefined
    this.props.onFormSubmit(this.state.term); // take the prop and call it on this.state.term
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
