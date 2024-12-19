import React from 'react'
import {NavLink} from 'react-router-dom'
import GetProject from '../Utils/GetProject'
import { useDispatch, useSelector } from 'react-redux'
import DeleteProjects from '../Utils/DeleteProjects'
import pluralize from '../Utils/pluralize'

export default function Navlinks({set, list}) {
  const dispatch = useDispatch();
  const selected = useSelector(state=>state.projects_selected);
  function getDifference(A, B) {
    const setB = new Set(B);
    return A.filter(item => !setB.has(item.project_id));
  }
  return (
    <nav className="navlinks">
        <ul>
            <li><NavLink to='/CreateProject' onClick={()=>dispatch({type: 'set_default'})}>Создать</NavLink></li>
            <li onClick={()=>{
              //let conf = window.confirm("Вы действительно хотите удалить " + selected.length + " проектов?")
              if(window.confirm("Вы действительно хотите удалить " + selected.length + " проект" + pluralize(selected.length) + "?")){
                DeleteProjects(selected);
                set(getDifference(list, selected));
                dispatch({type: "unselectAll"});
              }
            }}>Удалить</li>
        </ul>
    </nav>
  )
}
