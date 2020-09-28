import React from "react";
import { Link } from 'react-router-dom';
import Header from './Header';

const BestPractices = () => {
  
  return (
    <div className="front-page">
      <Header />
      <h1>React Best Practices - part 2</h1>
      <img src="./squares.gif" className="front-image" />
      <Link to="/DRY">Next</Link>
    </div>
  );
};

export default BestPractices;
