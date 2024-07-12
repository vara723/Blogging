import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="index.html" className="navbar-brand">Art.Design</a>
        <div className="navbar-nav">
          <a href="/">home</a>
          <a href="/">design</a>
          <a href="/">blog</a>
          <a href="/">about</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
