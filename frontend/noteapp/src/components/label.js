import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/labelstyle.css'
import '../styles/buttonlink.css'

export default function Label({titleLabel, textLabel, clickHandler, setTle, setTxt}) {
  return (
    <div className='conteinerlabel'>
        <div className='subcontl'>
            <div className='boxlabeltitle'>
                <label>
                    <input type="text" placeholder='Title' value={titleLabel} onChange={(e) => setTle(e.target.value)} />
                </label>
            </div>
            <div className='boxlabeltext'>
                <label>
                    <textarea value={textLabel} placeholder='Create a note' onChange={(e) => setTxt(e.target.value)} />
                </label>
            </div>
            <div className='divbutton'>
                <Link onClick={clickHandler} className='buttonl schanges' to="/">Save changes</Link>
            </div>
            {/* <button onClick={handleCreateNote}>Crear Nota</button> */}
        </div>
    </div>
  )
}
