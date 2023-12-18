import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Label from './label';


export default function Createnote() {

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleCreateNote = async () => {
    try {
      const response = await fetch('http://localhost:8080/notes/createNote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: text,
          title: title,
          isArchived: false
        }),
      });

      if (response.ok) {
        console.log('Nota creada exitosamente');
        // Redirigir a la página principal después de crear la nota
      } else {
        console.error('Error al crear la nota');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (

    <Label titleLabel={title}  textLabel={text} clickHandler={handleCreateNote} setTle={setTitle} setTxt={setText} />
  )
}
