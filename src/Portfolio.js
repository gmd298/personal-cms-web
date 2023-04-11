import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Portfolio = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await axios.get('/posts');
      setImages(response.data);
    };
    fetchImages();
  }, []);

  return (
    <div className="portfolio">
      <h1>My Portfolio</h1>
      <div className="grid">
        {images.map((image) => (
          <div className="grid-item" key={image._id}>
            <img src={image.url} alt={image.title} />
            <div className="overlay">
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;