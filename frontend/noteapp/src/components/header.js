import "../styles/headerstyle.css"
import React from 'react'
import Buttoncn from "./buttoncn"
import logo from '../img/logonote.png';

export default function Header() {

  const handleDeleteAllItems = async () => {
    try {
      const response = await fetch('http://localhost:8080/notes/delete-note-all', {
        method: 'DELETE',
      })
    } catch (error) {
      console.error('Error en la solicitud:', error)
    }
  }

  return (
    <div className="header">
      <div className="imagelogo">
        <img src={logo} alt="logonote" />
      </div>
      <div className="btns">
        <Buttoncn text="Create new note"/>
        <Buttoncn onClick={() => handleDeleteAllItems()} text="Clear all"/>
      </div>
      <div className="login">

      </div>
    </div>
  )
}
