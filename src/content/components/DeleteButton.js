import React from 'react';
// import axios from 'axios';

export default function DeleteButton(props) {
  const handleDelete = e => {
    console.log('Deleting!')
  }

  return (
    <form className="delete-bounty-button" onSubmit={handleDelete}>
      <input type="submit" value="Remove this Bounty" />
    </form>
  )
}
