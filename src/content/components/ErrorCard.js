import React from 'react'

export default function ErrorCard(props) {
  return (
    <div className="error-card">
      {props.error}
    </div>
  )
}
