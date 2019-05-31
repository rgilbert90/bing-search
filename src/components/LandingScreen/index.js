import React from 'react';
import Logo from '../Logo';
import SearchBar from '../SearchBar';

const logo = {
  margin: "0 auto",
  maxWidth: "272px",
  display: "block",
};

const searchBar = {
  margin: "0 auto",
  maxWidth: "400px",
  width: "100%",
  height: "30px",
  display: "block",
  fontSize: "1em",
  borderRadius: "30px",
  padding: "10px",
  border: "1px solid #dfe1e5",
};

const searchButton = {
  margin: "25px auto",
  display: "block",
  fontSize: "14px",
  backgroundColor: "#f2f2f2",
  border: "1px solid #f2f2f2",
  borderRadius: "4px",
  fontFamily: "arial",
  padding: "10px 16px",
}

const LandingScreen = ({ onTermSubmit, results }) => {
  return (
    <div>
      <div><Logo layout={logo}/></div>
      <div>
        <SearchBar layout={searchBar} buttonLayout={searchButton} onFormSubmit={onTermSubmit}/>
      </div>
    </div>
  )
};

export default LandingScreen;