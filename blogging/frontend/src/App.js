import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import DesignSection from './components/DesignSection';
import BlogSection from './components/BlogSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  const [blogData, setBlogData] = useState([]);

  async function fetchBlogs() {
    try {
      const res = await fetch('https://dummyjson.com/posts');
      const data = await res.json();
      console.log('Fetched data:', data); // Debugging line
      setBlogData(data.posts);
    } catch (error) {
      console.error('Error fetching blog data:', error);
    }
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <Header />
      <DesignSection />
      <BlogSection blogData={blogData} />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
