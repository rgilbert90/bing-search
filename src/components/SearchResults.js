import React from 'react';

const SearchResults = ({results}) => {
  if (!results) {
    return <div></div>
  }

  const renderedList = results.map((article) => {
    return (
      <a href={article.url}>
        <li>
          <div key={article.name}>
          {article.name}
          </div>
        </li>
      </a>
    );
  });
  return <ul>{renderedList}</ul>;
};

export default SearchResults;