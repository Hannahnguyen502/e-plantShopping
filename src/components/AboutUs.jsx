import React from 'react';
import './AboutUs.css'; // Optional: If you want to separate your styles

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1 className="about-us-title">About Paradise Nursery</h1>
        
        <p className="about-us-tagline">
          Where passion meets growth, and your home finds its green soul.
        </p>

        <section className="about-us-section">
          <h2>Our Mission</h2>
          <p>
            At Paradise Nursery, our mission is to bring the healing, vibrant, and air-purifying power of nature straight to your doorstep. We believe that everyone deserves a touch of green in their lives, whether you are a seasoned plant parent managing an indoor jungle or a beginner trying to keep your very first succulent alive.
          </p>
        </section>

        <section className="about-us-section">
          <h2>Why Choose Us?</h2>
          <ul className="about-us-features">
            <li>
              <strong>Premium Quality:</strong> Every plant in our greenhouse is hand-selected, meticulously nurtured, and inspected for health before it joins your family.
            </li>
            <li>
              <strong>Expert Guidance:</strong> We don't just sell plants; we help you grow them. Our team provides lifelong care tips and customized recommendations for your specific space.
            </li>
            <li>
              <strong>Eco-Friendly Practices:</strong> From organic soil mixes to sustainable, careful packaging, we treat the planet with the same love we give our plants.
            </li>
          </ul>
        </section>

        <section className="about-us-section">
          <h2>Our Story</h2>
          <p>
            Founded by a small group of botanists and interior landscape designers, Paradise Nursery started as a humble neighborhood greenhouse. Today, we have grown into an online community of plant lovers, driven by the simple joy of watching a new leaf unfurl. Thank you for letting us share our passion with you and helping make the world a little greener, one room at a time.
          </p>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
