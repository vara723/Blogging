import React from 'react';

function BlogSection({ blogData = [] }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return isNaN(date) ? "Invalid Date" : date.toLocaleDateString();
  };

  return (
    <section className="blog" id="blog">
      <div className="container">
        <h2>RECENT BLOGS ABOUT ART & DESIGN</h2>
        <div className="blog-container">
          {blogData.length === 0 ? (
            <p>Loading blog posts...</p>
          ) : (
            blogData.map((blog, index) => (
              <div key={index} className="blog-item">
                <h3>{blog.title}</h3>
                <p>{formatDate(blog.date)}</p>
                <p>{blog.body.slice(0, 100)}...</p>
                <a href="#">Read More</a>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
