import React from 'react';
import bing from '../apis/bing';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults'

class App extends React.Component {

  state = {results: null};

  // componentDidMount() {
  //   this.onTermSubmit('Test');
  // }
  // componentDidUpdate() {
  //   console.log(this.state.results);
  // }

  onTermSubmit = async term => {
    const response = await bing.get('/news/search', {
      params: {
        q: term
      }
    });
    this.setState({results: response.data.value});

  }

  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <SearchResults results={this.state.results}/>
      </div>
    );
    }
};

export default App;