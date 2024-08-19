import React, { useState, useEffect } from 'react';
import './HelpCenter.css';
import axios from 'axios';

const HelpCenter = () => {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // New state for search query

  useEffect(() => {
    axios.get('http://localhost:4000/cards/')
      .then(response => {
        setCards(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Filter cards based on search query
  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="help-center">
      <header className="header">
        <div className="logo">Abstract | Help Center</div>
        <button className="submit-request">Submit a request</button>
      </header>
      
      <div className="content">
        <h1>How can we help?</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query
          />
          <button>➜</button>
        </div>

        <div className="card-grid">
          {filteredCards.map((card, index) => (
            <div key={index} className="card">
              <h2>{card.title}</h2>
              <hr />
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <footer className="footer">
        <div className="footer-section">
          <h3>Abstract</h3>
          <p>Branches</p>
        </div>
        <div className="footer-section">
          <h3>Resources</h3>
          <p>Blog</p>
          <p>Help Center</p>
          <p>Release Notes</p>
          <p>Status</p>
        </div>
        <div className="footer-section">
          <h3>Community</h3>
          <p>Twitter</p>
          <p>LinkedIn</p>
          <p>Facebook</p>
          <p>Dribbble</p>
          <p>Podcast</p>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Legal</p>
          <p>Contact Us</p>
          <p>info@abstract.com</p>
        </div>
      </footer>
    </div>
  );
}

export default HelpCenter;
