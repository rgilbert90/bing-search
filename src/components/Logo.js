import React from 'react';

const Logo = ({ layout, onClick }) => {
  return (
    <div onClick={onClick}>
      <img style={layout} src="/images/google.png"></img>
    </div>
  );
};

export default Logo;