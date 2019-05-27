import React from 'react';

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
        <div>Search</div>
        <form onSubmit={this.onFormSubmit}>
          <input
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