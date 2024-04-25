import React from 'react'

export default function TextField({Title, Message})
{
  const RecalculateTextFieldType = () =>
  {
    if(Array.isArray(Message))
    {
      return Message.map((e) =>
      (
        <p>{Message && e}</p>
      ))
    }
    
    return <p>{Message && Message}</p>
  }

  return (
    <div className='TextField'>
        <h1>{Title && Title}</h1>
        {RecalculateTextFieldType()}
    </div>
  )
}
