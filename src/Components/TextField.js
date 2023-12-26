import React from 'react'

export default function TextField({Title, Message})
{
  return (
    <div className='TextField'>
        <h1>{Title && Title}</h1>
        <p>{Message && Message}</p>
    </div>
  )
}
