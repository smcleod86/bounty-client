import React, { useState } from 'react';
// import { useAddMuseum } from '../../../CustomHooks';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default function NewBounty(props) {
  // const { inputs, handleInputChange, handleSubmit } = useAddMuseum(sendToDb);
  const [newBounty, setNewBounty] = useState(false);
  const [error, setError] = useState(null);
  const [inputs, setInputs] = useState({
    name: '', // required
    wantedFor: '', //required
    client: '',
    ship: '',
    reward: '',
    hunters: '',
    lastSeen: ''
  });
  
  const sendToDb = () => {
    axios.post(`${process.env.REACT_APP_SERVER_URL}/bounties`, inputs)
    .then(response => {
      if (response.data.message) {
        console.log(response.data.err)
        setError(response.data.message)
      } else {
        setNewBounty(true)
      }
    }).catch(err=>{
      console.log(err)
      setError(err)
    });
  }

  const handleSubmit = e => {
    e.preventDefault()
    // change to an array

    sendToDb()
  }

  const handleInputChange = e => {
    e.persist();
    setInputs({...inputs, [e.target.name]: e.target.value })
  }

  if (newBounty) return <Redirect to={`/bounties/`} />

  return (
    <div className="center-flex-column">
      <h1>Bounty Intake Form</h1>
      <form className="new-bounty-form" onSubmit={handleSubmit}>
        <div className="bounty-form-field">
          <label>Criminal Name: </label>
          <input required type="text" name="name" onChange={handleInputChange} value={inputs.name} />
        </div>
        <div className="bounty-form-field">
          <label>Wanted For: </label>
          <input required type="text" name="wantedFor" onChange={handleInputChange} value={inputs.wantedFor} />
        </div>
        <div className="bounty-form-field">
          <label>Client: </label>
          <input type="text" name="client" onChange={handleInputChange} value={inputs.client} />
        </div>
        <div className="bounty-form-field">
          <label>Reward: </label>
          <input type="number" name="reward" onChange={handleInputChange} value={inputs.reward} />
        </div>
        <div className="bounty-form-field">
          <label>Ship Name: </label>
          <input type="text" name="ship" onChange={handleInputChange} value={inputs.ship} />
        </div>
        <div className="bounty-form-field">
          <label>Last Seen: </label>
          <input type="text" name="lastSeen" onChange={handleInputChange} value={inputs.lastSeen} />
        </div>
        <div className="bounty-form-field">
          <label>Hunters: </label>
          <input type="text" name="hunters" onChange={handleInputChange} value={inputs.hunters} />
        </div>
        <div className="bounty-form-field">
          <input type="submit" value="Submit Bounty" />
        </div>
      </form>
    </div>
  )
}

// name!
// wantedFor!
// client
// ship
// reward
// hunters: Array,
// lastSeen