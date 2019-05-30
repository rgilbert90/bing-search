import React from 'react';
import bing from './apis/bing';
import LandingScreen from './components/LandingScreen';
import ResultsScreen from './components/ResultsScreen';

class App extends React.Component {

  state = {results: null, showResults: false};

  onTermSubmit = async term => {
    const response = await bing.get('/news/search', {
      params: {
        q: term
      }
    });
    this.setState({results: response.data.value, showResults: true});

  }

  render() {
    if (this.state.showResults) {
      return (
        <ResultsScreen 
          onTermSubmit={this.onTermSubmit}
          results={this.state.results}
        />
      );
    };
    return (
      <LandingScreen 
        onTermSubmit={this.onTermSubmit}
        results={this.state.results}
      />
    );
  };
};

export default App;