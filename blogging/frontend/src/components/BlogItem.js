import React from 'react';

function BlogSection({ blogData = [] }) {
  return (
    <section className="blog" id="blog">
      <div className="container">
        <div className="title">
          <h2>Latest Blog</h2>
          <p>recent blogs about art & design</p>
        </div>
        <div className="blog-content">
          {blogData.length > 0 ? (
            blogData.map((blog) => (
              <div className="blog-item" key={blog.id}>
                <div className="blog-img">
                  <img src={`https://via.placeholder.com/600x400?text=${blog.title}`} alt={blog.title} />
                  <span><i className="far fa-heart"></i></span>
                </div>
                <div className="blog-text">
                  <span>{new Date(blog.date).toLocaleDateString()}</span>
                  <h2>{blog.title}</h2>
                  <p>{blog.body}</p>
                  <a href="#">Read More</a>
                </div>
              </div>
            ))
          ) : (
            <p>Loading blog posts...</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
