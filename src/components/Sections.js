import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Sections() {
  return (
    <div className="sections-container">
      <Link to="/gallery" className="section">GALLERY</Link>
      <Link to="/pictureofday" className="section">PICTURE OF THE DAY</Link>
      
      <Link to="/weatheronmars" className="section">WEATHER ON MARS</Link>
      <Link to="/wildfiretracker" className="section">WILDFIRE TRACKER</Link>
      <Link to="/solarsystem" className="solarsystem">THE SOLAR SYSTEM</Link>
    </div>
  );
}

export default Sections;
