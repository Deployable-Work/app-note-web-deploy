import '../styles/boxnote.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'



export default function Note(props) {
  const id    = props.id
  const title = props.title
  const text  = props.text
  const isArchived = props.archived

  //const deleteNote = useDelete(`http://localhost:8080/notes/delete-note/${id}`)

  const handleDeleteNote = async () => {
    const response = await fetch( `http://localhost:8080/notes/delete-note/${id}` , {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
      }
  });
  }

  const handleArchiveNote = async () => {
    try {
      const response = await fetch(`http://localhost:8080/notes/update-note/${id}`, {
        method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
          text: text,
          title: title,
          isArchived: !isArchived
          }),
      });

      if (response.ok) {
        console.log('Nota creada exitosamente');
      } else {
        console.error('Error al crear la nota');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div>
      <Link to={`/update-note/${id}/${title}/${text}/${isArchived}`} className='linkdiv'>
        <div className='note'>
          <div className='titlenote'><h3>{props.title}</h3></div>
          <div className='textnote'>{props.text}</div>
        </div>
      </Link>
      <div className='divarchive'>
        <Link onClick={handleArchiveNote} className='btnarchive buttonl'><FontAwesomeIcon icon={faBoxArchive} /></Link>
        <Link onClick={handleDeleteNote} className='btnarchive buttonl'><FontAwesomeIcon icon={faTrash} /></Link>
      </div>
    </div>
  )
}
