import React from 'react'

function Avisekk(props) {
  return (
    <div>
        <h1>{props.user.firstname} {props.user.lastname}</h1>
        <h2>{props.user.email}</h2>
        <h3>{props.user.number}</h3>
    </div>
  )
}

export default Avisekk