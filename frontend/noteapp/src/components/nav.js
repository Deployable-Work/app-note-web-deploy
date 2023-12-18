import { NavLink } from 'react-router-dom'
import React from 'react'

export default function Nav({visible}) {

  const navClass = visible ? 'nav-visible' : 'nav-hidden';

  return (
    <nav className={`${navClass}`}>
        <NavLink className="navstyle" to='/'><span className="spanstyle"><b>Notes</b></span></NavLink>
        <NavLink className="navstyle" to='/archived'><span className="spanstyle"><b>Archived</b></span></NavLink>
        <NavLink className="navstyle" to='/recicle'><span className="spanstyle"><b>Recycle Bin</b></span></NavLink>
        <NavLink className="navstyle" to='/ddd'><span className="spanstyle"><b>About</b></span></NavLink>
        <NavLink className="navstyle" to='/dddd'><span className="spanstyle"><b>Support</b></span></NavLink>
    </nav>
  )
}
