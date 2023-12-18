import React from 'react'
import Note from './note';
import "../styles/notecontainer.css"
import { useFetch } from '../apis/useFetch';

export default function Notecontainer() {
  const { data } = useFetch("http://localhost:8080/notes")

  return (
    <div className='ncontainer'>
      <div className='subncont'>
        {data?.map((note) => (<Note key={note.id} id={note.id} title={note.title} text={note.text} archived={note.isArchived}/>))}
      </div>
    </div>
  )
}
