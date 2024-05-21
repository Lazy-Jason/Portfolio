import React from 'react';
import ActionButton from '../ActionButton';

const ExternalWidget = ({ title, src, Author }) =>
{

  const HandleClick = () =>
  {
    window.open(src, "blank")
  }
  return (
    <>
      <div className='Project-External-Widget'>
        <h1>{title}</h1>
        <p>by <b>{Author || "default Author"}</b></p>
        <h1></h1>
        <ActionButton OnClicked={HandleClick} Message={"Download On Itch.io"} FontSize={1} />
      </div>
    </>
  )
}

export default ExternalWidget;
