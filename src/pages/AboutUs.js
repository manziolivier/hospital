// AboutUs.js
import React from "react";
import "./AboutUs.css"; // Import the CSS file for styling
import cordorImage from "./cordor.jpeg"; // Import the image

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-text">
        <h2>About Our Hospital</h2>
        <p>
          Welcome to our hospital, where we are dedicated to providing
          compassionate and exceptional healthcare services. Our mission is to
          enhance the well-being of our community by delivering high-quality,
          patient-centered care.
        </p>
        <p>
          At our hospital, we aspire to be a beacon of hope and healing,
          embracing a vision where everyone receives comprehensive healthcare
          with dignity and respect. Our goal is to create a healing environment
          that promotes physical, emotional, and spiritual well-being.
        </p>
        <p>
          We integrate faith into health, recognizing the importance of
          spirituality in the healing process. Our commitment is to serve with
          integrity, compassion, and a deep sense of responsibility to our
          patients and their families. We believe in fostering a community of
          care that extends beyond medical treatment, acknowledging the
          interconnectedness of body, mind, and spirit.
        </p>
      </div>

      <div className="about-image">
        <img
          src={cordorImage} // Use the imported image
          alt="About Us Image"
          className="about-image"
        />
        <p>
         
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
