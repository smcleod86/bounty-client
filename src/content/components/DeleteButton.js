import React from 'react';
import axios from 'axios';

export default function DeleteButton(props) {
  const handleDelete = e => {
    axios.delete(`${process.env.REACT_APP_SERVER_URL}/bounties/${props.id}`)
    .then(response => {
      if (response.data.message) {
        console.log(response.data.err)
        props.setError(response.data.message)
      }
    }).catch(err=>{
      console.log(err)
      props.setError(err)
    });
  }

  return (
    <form className="delete-bounty-button" onSubmit={handleDelete}>
      <input type="submit" value="Remove this Bounty" />
    </form>
  )
}
