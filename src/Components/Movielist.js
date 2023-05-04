import React from 'react'
import Moviecard from './Moviecard'

const Movielist = ({akrem}) => {
  return (
    <div>
      {akrem.map((el)=><Moviecard omar={el}/>)}
    </div>
  )
}

export default Movielist
