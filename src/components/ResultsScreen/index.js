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
  maxWidth: "600px",
  width: "100%",
  height: "30px",
  display: "flex",
  fontSize: "1em",
  borderRadius: "30px",
  padding: "10px",
  border: "1px solid #dfe1e5",
  flexGrow: "5",
};

const logoWrapper = {
  display: "flex",
  justifyContent: "flex-start",
};

const searchBarWrapper = {
  padding: "25px",
  width: "600px",
  display: "flex",
  justifyContent: "flex-start",
  
}

const searchButton = {
  margin: "0 auto 0 15px",
  fontSize: "14px",
  backgroundColor: "#f2f2f2",
  border: "1px solid #f2f2f2",
  borderRadius: "4px",
  fontFamily: "arial",
  padding: "10px 0 ",
  width: "200px",
}

const formLayout = {
  display: "flex",
  width: "100%",
}

const ResultsScreen = ({ onTermSubmit, results, reset }) => {
  
  return (
    <div>
      <div style={logoWrapper}>
      <Logo layout={logo} onClick={reset}/>
      <div style={searchBarWrapper}>
        <SearchBar layout={searchBar} onFormSubmit={onTermSubmit} buttonLayout={searchButton} formLayout={formLayout}/>
        </div>
      </div>
      <div>
        <SearchResults results={results}/>
      </div>
    </div>
  )
};

export default ResultsScreen;