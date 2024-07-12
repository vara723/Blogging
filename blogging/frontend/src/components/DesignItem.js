import React from 'react';

function DesignItem({ item }) {
  return (
    <div className="design-item">
      <div className="design-img">
        <img src={item.img} alt="" />
        <span><i className="far fa-heart"></i> 22</span>
        <span>Art & Design</span>
      </div>
      <div className="design-title">
        <a href="#">{item.title}</a>
      </div>
    </div>
  );
}

export default DesignItem;
