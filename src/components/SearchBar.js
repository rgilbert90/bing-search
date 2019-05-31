import React from 'react';
import '../App.css';
import LandingScreen from './LandingScreen';
import ResultsScreen from './ResultsScreen';

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
      <form style={this.props.formLayout} onSubmit={this.onFormSubmit}>
        <input
          style={this.props.layout}
          type="text"
          value={this.state.term}
          onChange={this.onInputChange}
          placeholder="Search news here!"
        />
        <button style={this.props.buttonLayout} onSubmit={this.onFormSubmit}>Google Search</button>
      </form>
    );
  }
}
export default SearchBar; 