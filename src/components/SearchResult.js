import React from 'react';

const resultsWrapper = {
  margin: "0 120px",
  fontFamily: "Roboto",
};

const resultTitle = {
  lineHeight: "1.33",
  fontSize: "18px",
};

const resultUrl = {
  fontSize: "14px",
  color: "rgb(0, 102, 33)",
};

const resultDesc = {
  fontSize: "13px",
};

const textDecoration = {
  textDecoration: "none",
}

const SearchResult = ({ article }) => {
  return (
    <div style={resultsWrapper}>
      <a style={textDecoration} href={article.url}>
        <div style={resultTitle} key={article.name}>
          {article.name}
        </div>
        <div style={resultUrl}>
          {article.url}
        </div>
      </a>
      <div style={resultDesc}>
        <p>{article.description}</p>
      </div>
    </div>
  );
}

export default SearchResult;
