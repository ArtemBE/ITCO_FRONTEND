import React from 'react'
import {NavLink} from 'react-router-dom'

export default function NavLinksCreate() {
  return (
    <nav className="navlinks createProject-navlinks">
            <ul>
                <li><NavLink to="/">Вернуться</NavLink></li>
                <li><a href>Сохранить</a></li>
            </ul>
        </nav>
  )
}
