import React from 'react'
import {NavLink} from 'react-router-dom'
import GetProject from '../Utils/GetProject'
import { useDispatch } from 'react-redux'

export default function Navlinks() {
  const dispatch = useDispatch();
  return (
    <nav className="navlinks">
        <ul>
            <li><NavLink to='/CreateProject' onClick={()=>dispatch({type: 'set_default'})}>Создать</NavLink></li>
            <li><a href onClick={GetProject}>Удалить</a></li>
        </ul>
    </nav>
  )
}
