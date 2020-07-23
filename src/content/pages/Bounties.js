import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BountyCard from '../components/BountyCard';
import ErrorCard from '../components/ErrorCard';
import axios from 'axios';

export default function Bounties(props) {
  const [bounties, setBounties] = useState([]);
  const [error, setError] = useState(null);

  // call to API to get all bounties
  useEffect(()=>{
    // TODO: Call the server
    console.log('call the server for bounties!')
  }, [])

  let bountyList = bounties.length < 1 ? 
    <h3>There are no bounties</h3> :
    bounties.map((bounty, i) => (
      // TODO: pass bounty deets
      <BountyCard key={`bounty-${i}`} setError={setError} />
    ))

  return (
    <div>
      {error ? <ErrorCard error={error} /> : null}
      <h1>Intergalactic Bounty Board</h1>
      <Link className="new-bounty-card" to='/bounties/add'>Add a Bounty</Link>
      <div className="bounty-container">
        {bountyList}
      </div>
    </div>
  )
}