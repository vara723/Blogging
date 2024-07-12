import React from 'react';
import '../App.css'
function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div>
            <img src="images/about-bg.jpg" alt="" />
          </div>
          <div className="about-text">
            <div className="title">
              <h2>Catherine Doe</h2>
              <p>art & design is my passion</p>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id totam voluptatem saepe eius ipsum nam provident sapiente, natus et vel eligendi laboriosam odit eos temporibus impedit veritatis ut, illo deserunt illum voluptate quis beatae quod. Necessitatibus provident dicta consectetur labore!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti natus, eos quia recusandae voluptatem veniam modi officiis minima provident rem sint porro fuga quos tempora ea suscipit vero velit sed laudantium eaque necessitatibus maxime!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
