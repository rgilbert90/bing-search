import React from 'react';
import Logo from '../Logo';
import SearchBar from '../SearchBar';
import SearchResults from '../SearchResults';
import { blockStatement } from '@babel/types';

const logo = {
  margin: "0",
  maxWidth: "100px",
  display: "flex",
};

const searchBar = {
  margin: "0 auto",
  width: "600px",
  height: "30px",
  display: "flex",
  fontSize: "1em",
  borderRadius: "30px",
  padding: "10px",
  border: "1px solid #dfe1e5",
};

const logoWrapper = {
  display: "flex",
  justifyContent: "flex-start",
};

const searchBarWrapper = {
  padding: "25px",
}


const ResultsScreen = ({ onTermSubmit, results }) => {
  return (
    <div>
      <div style={logoWrapper}>
      <div><Logo layout={logo} /></div>
      <div style={searchBarWrapper}>
        <SearchBar layout={searchBar} onFormSubmit={onTermSubmit}/>
        </div>
      </div>
      <div>
        <SearchResults results={results}/>
      </div>
    </div>
  )
};

export default ResultsScreen;