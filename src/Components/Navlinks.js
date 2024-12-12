import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navlinks() {
  return (
    <nav className="navlinks">
        <ul>
            <li><NavLink to='/CreateProject'>Создать</NavLink></li>
            <li><a href>Удалить</a></li>
        </ul>
    </nav>
  )
}
