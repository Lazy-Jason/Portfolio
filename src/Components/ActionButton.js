import React from 'react'
import "../Styles/Button.css"

export default function ActionButton({Icon, Message, FontSize = 1.5, OnClicked, Link})
{
  const HandleClicked = () =>
  {
    OnClicked && OnClicked()
  }
  
  return(
    <button className='ActionButton' style={{ fontSize: `${FontSize}rem`}} onClick={HandleClicked}>
      {Icon}
      {Message && Message}
    </button>
  )
}
