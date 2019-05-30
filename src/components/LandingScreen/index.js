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
  width: "400px",
  height: "30px",
  display: "block",
  fontSize: "1em",
  borderRadius: "30px",
  padding: "10px",
  border: "1px solid #dfe1e5",
};

const LandingScreen = ({ onTermSubmit, results }) => {
  return (
    <div>
      <div><Logo layout={logo}/></div>
      <div>
        <SearchBar layout={searchBar} onFormSubmit={onTermSubmit}/>
      </div>
    </div>
  )
};

export default LandingScreen;