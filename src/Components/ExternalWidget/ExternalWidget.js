import React from 'react';

const ExternalWidget = ({ title, src }) =>
{
  return (
    <iframe
      className='Project-External-Widget'
      title={title}
      frameBorder="0"
      src={src}
    />
  )
}

export default ExternalWidget;
