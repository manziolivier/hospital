// Gallery.js
import React from "react";
import "./Gallery.css"; // Import the CSS file for styling

// Import your images
import image1 from "./123.jpg";
import image2 from "./cordor.jpeg";
import image3 from "./ro.jpg";
import image4 from "./frontdesk.jpg";
import image5 from "./1.jpg";
import image6 from "./2.jpg";
import image7 from "./3.jpg";
import image8 from "./4.jpg";

const Gallery = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8];

  return (
    <div className="gallery-container">
      <h2>Photo Gallery</h2>
      <div className="image-grid">
        {images.map((image, index) => (
          <div className="image-card" key={index}>
            <img src={image} alt={`Image ${index + 1}`} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
