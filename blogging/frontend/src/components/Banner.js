import React from 'react';

function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <h1 className="banner-title">
          <span>Art.</span> Design Blog
        </h1>
        <p>everything that you want to know about art & design</p>
        <form>
          <input type="text" className="search-input" placeholder="find your food . . ." />
          <button type="submit" className="search-btn">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Banner;
