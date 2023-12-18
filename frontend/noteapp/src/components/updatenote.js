import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Label from './label';

export default function Updatenote() {



const {id, titleparam, textparam, isArchived} = useParams()
const [title, setTitle] = useState(titleparam);
const [text, setText] = useState(textparam);

  const handleUpdateNote = async () => {
    try {
      const response = await fetch(`http://localhost:8080/notes/update-note/${id}`, {
        method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
          text: text,
          title: title,
          isArchived: isArchived
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
    <Label titleLabel={title}  textLabel={text} clickHandler={handleUpdateNote} setTle={setTitle} setTxt={setText} />
  )
}
