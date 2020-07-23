import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <ul className="nav">
        <li className="nav-link">
          <Link to="/" className="link">Home</Link>
        </li>
        <li className="nav-link">|</li>
        <li className="nav-link">
          <Link to="/bounties" className="link">Definitely not intergalactic bounties</Link>
        </li>
      </ul>
    </nav>
  )
}