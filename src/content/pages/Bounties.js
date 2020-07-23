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
    console.log(process.env.REACT_APP_SERVER_URL)
    axios.get(`${process.env.REACT_APP_SERVER_URL}/bounties`)
    .then(response => {
      console.log(response)
      // TODO: Check for errors
        // Set error message
      // else
        // setBounties()
      setBounties(response.data)
    }).catch(err=>{
      setError(err.message)
      console.log(err)
    });
  }, [])

  let bountyList = bounties.length < 1 ? 
    <h3>There are no bounties</h3> :
    bounties.map((bounty, i) => (
      // TODO: flesh out bounty div
      <BountyCard key={`bounty-${i}`} {...bounty} />
    ))

  return (
    <div>
      <h1>Intergalactic Bounty Board</h1>
      {/* TODO: Error Card */}
      {error ? <ErrorCard error={error} /> : null}
      <Link className="new-bounty-card" to='/bounties/add'>Add a Bounty</Link>
      <div className="bounty-container">
        {bountyList}
      </div>
    </div>
  )
}