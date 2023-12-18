import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/buttonlink.css'
import '../styles/buttonheader.css'

export default function Buttoncn(props) {

  const targetRoute = props.text === 'Create new note' ? '/create-note' : '#';

  return (
    <div>
      <Link onClick={props.onClick} to={targetRoute} className='bheader buttonl'>{props.text}</Link>
    </div>
  )
}
