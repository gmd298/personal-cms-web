import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Portfolio = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/v1/posts');
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="content">
      <h1>My Portfolio</h1>
      <div className="grid">
        {posts.map((post) => (
          <div className="card" key={post._id}>
            <div className="card-content">
              <img src={post.url} alt={post.title} />
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;