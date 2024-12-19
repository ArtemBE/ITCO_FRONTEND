import React from 'react'
import {NavLink} from 'react-router-dom'
import AddProject from '../Utils/AddProject'
import { useSelector } from 'react-redux'
import EditProject from '../Utils/EditProject'

export default function NavLinksCreate() {
  let project = useSelector(state=>state)
  return (
    <nav className="navlinks createProject-navlinks">
            <ul>
                <li><NavLink to="/">Вернуться</NavLink></li>
                <li><a href="#" onClick={()=>{
                  project.project_id==-1?
                  AddProject(project):
                  EditProject({...project, project_id: project.project_id});
                  //dispatch({type: 'edit_id', payload: project})
                }}>Сохранить</a></li>
            </ul>
        </nav>
  )
}
