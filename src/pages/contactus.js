import React, { useState } from "react";
import "./contactus.css";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    telephone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (!formData.name || !formData.telephone || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    // Send email
    try {
      await axios.post("http://localhost:8080/send-email", formData);
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again later.");
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Feel free to reach out to us using the contact form or other methods below:</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        {["name", "telephone", "message"].map((field) => (
          <React.Fragment key={field}>
            <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
            {field === "message" ? (
              <textarea
                id={field}
                name={field}
                placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                value={formData[field]}
                onChange={handleChange}
                required
              />
            ) : (
              <input
                type={field === "telephone" ? "tel" : "text"}
                id={field}
                name={field}
                placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                value={formData[field]}
                onChange={handleChange}
                required
              />
            )}
          </React.Fragment>
        ))}
        <button type="submit">Submit</button>
      </form>

      <div className="contact-info">
        <h3>Contact Information:</h3>
        <p>Call us: <a href="tel:+250783499640">0783499640</a></p>
        <p>Email us: <a href="mailto:oliviermanzi213@gmail.com">oliviermanzi213@gmail.com</a></p>
        <p>Follow us on Instagram: <a href="https://www.instagram.com/olivier_manzi_/" target="_blank" rel="noopener noreferrer">Instagram</a></p>
      </div>

      <div className="location-info">
        <h3>Visit Us:</h3>
        <p>check out location</p>
        <p>
          View on Google Maps:{" "}
          <a
            href="https://maps.app.goo.gl/yBgEx93NPHxK5pk38"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Maps
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
