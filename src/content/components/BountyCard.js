import React from 'react'

export default function BountyCard(props) {
  return (
    <div className="bounty-card">
      <h3>WANTED: {props.name}</h3>
      <p>Bounty posted by: {props.client}</p>
    </div>
  )
}
