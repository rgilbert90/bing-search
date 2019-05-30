import React from 'react';
import SearchResult from './SearchResult';

const SearchResults = ({results}) => {
  if (!results) {
    return <div></div>
  }

  const renderedList = results.map((article) => {
    return (
      <div><SearchResult article={article}/></div>
    );
  });
  return renderedList;
};

export default SearchResults;