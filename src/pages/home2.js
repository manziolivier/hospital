// Home2.js
import React from "react";
import "./home2.css";
import ServiceCard from "./ServiceCard";

const Home2 = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to Our Hospital</h1>
      </header>

      <section className="main-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
        </p>
        <p>
          Suspendisse cursus fermentum risus, vel consectetur justo ultricies in.
        </p>
      </section>

      <section className="services-section">
        <h2>Our Services</h2>
        <div className="service-cards-container">
          <ServiceCard
            title="Cardiology"
            description="Comprehensive care for heart-related issues."
          />
          <ServiceCard
            title="Orthopedics"
            description="Specialized treatment for musculoskeletal conditions."
          />
          <ServiceCard
            title="Neurology"
            description="Expert care for neurological disorders and conditions."
          />
          {/* Add more service cards as needed */}
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2023 Your Hospital Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home2;
