import React from 'react'

const Moviecard = ({omar}) => {
  return (
    <div>
      <h1>{omar.name}</h1>
      <img src={omar.image} alt="404" height="200px" width="150px"/>
    </div>
  )
}

export default Moviecard
