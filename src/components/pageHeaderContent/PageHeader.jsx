import React from 'react'
import './pageheader.css';

export default function PageHeader(props) {

  const {headerText, icon} = props;
  return (
    <div className='wrapper'>
<h2>{headerText}</h2>
<span>{icon}</span>

    </div>
  )
}
