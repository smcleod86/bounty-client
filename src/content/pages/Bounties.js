import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Bounties(props) {
  const [bounties, setBounties] = useState([]);
  const [error, setError] = useState(null);

  // call to API to get all bounties
  useEffect(()=>{
    // TODO: Call the server
    axios.get(`https://api.kanye.rest`)
    .then(response => {
      console.log(response)
      // TODO: Check for errors
        // Set error message
      // else
        // setBounties()
      setBounties([response.data.quote])
    }).catch(err=>{
      setError(err.message)
      console.log(err)
    });
  }, [])

  let bountyList = bounties.length < 1 ? 
    <h3>There are no bounties</h3> :
    bounties.map((bounty, i) => (
      // TODO: flesh out bounty div
      <div key={`bountyListItem-${i}`}>
        {bounty}
      </div>
    ))

  return (
    <div>
      <h1>bounties STUB</h1>
      {/* TODO: Error Card */}
      {error ? <p>{error}</p> : null}
      <Link to='/bounties/add'>Add a Bounty</Link>
      {bountyList}
    </div>
  )
}