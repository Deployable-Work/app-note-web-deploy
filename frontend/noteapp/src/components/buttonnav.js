import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


export default function Buttonnav({ onClick, displace }) {
    const nameClass = displace ? 'displace' : 'no-displace';

    return (
    <div onClick={ onClick }>
        <Link className={`buttonNav ${nameClass}`}><FontAwesomeIcon icon={faBars} /></Link>
    </div>
  )
}
