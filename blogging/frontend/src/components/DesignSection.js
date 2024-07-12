import React from 'react';
import DesignItem from './DesignItem';
import designData from './designdata'

function DesignSection() {
  return (
    <section className="design" id="design">
      <div className="container">
        <div className="title">
          <h2>Recent Arts & Designs</h2>
          <p>recent arts & designs on the blog</p>
        </div>
        <div className="design-content">
          {designData.map((item, index) => (
            <DesignItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DesignSection;
