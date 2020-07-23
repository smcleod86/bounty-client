import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="half">
      <ul className="App-nav">
        <li className="App-nav-link">
          <Link to="/" className="App-link">Home</Link>
        </li>
        <li className="App-nav-link">
          <Link to="/bounties" className="App-link">Definitely not intergalactic bounties</Link>
        </li>
      </ul>
    </nav>
  )
}