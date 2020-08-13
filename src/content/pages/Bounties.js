import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BountyCard from '../components/BountyCard';
import ErrorCard from '../components/ErrorCard';
import axios from 'axios';

export default function Bounties(props) {
  const [bounties, setBounties] = useState([]);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(false)

  // call to API to get all bounties
  useEffect(()=>{
    setRefresh(false)
    // Call the server
    axios.get(`${process.env.REACT_APP_SERVER_URL}/bounties`)
      .then(response => {
        // check the response it good
        if (response.status === 200) {
          // set bounties equal to
          setBounties(response.data)
        } else {
          setError(response.statusText)
        }
        console.log(response)
      })
      .catch(err => {
        setError(err.message)
      })
  }, [])

  let bountyList = bounties.length < 1 ? 
    <h3>There are no bounties</h3> :
    bounties.map((bounty, i) => (
      // TODO: pass bounty deets
      <BountyCard key={`bounty-${i}`} {...bounty} setError={setError} refresh={setRefresh} />
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