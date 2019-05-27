import React from 'react';
import './App.css';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = (event) => {
    this.setState({
      term: event.target.value
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  }

  render() {
    return (
      <div>
        <div><img className="google" src="/images/google.png"></img></div>
        <form onSubmit={this.onFormSubmit}>
          <input
            className="search"
            type="text"
            value={this.state.term}
            onChange={this.onInputChange}
            placeholder="Search news here!"
          />
        </form>
      </div>
    );
  }
}
export default SearchBar; 