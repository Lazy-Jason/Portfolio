import React from 'react'

export default function ActionIcon({Icon, Message})
{
  return (
    <divv className = "Action">
        {Icon && <Icon />}
        <span>{Message && Message}</span>
    </divv>
  )
}
